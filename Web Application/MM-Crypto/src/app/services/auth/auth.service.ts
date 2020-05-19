import { Injectable } from '@angular/core';
import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { from, of, Observable, BehaviorSubject, combineLatest, throwError } from 'rxjs';
import { tap, catchError, concatMap, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MmCryptoAuthService } from '../mm-crypto-auth/mm-crypto-auth.service';
import { MmCryptoService } from '../mm-crypto/mm-crypto.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{

  auth0Client$ = (from(
    createAuth0Client({
      domain: 'mm-crypto.eu.auth0.com',
      client_id: 'YxgSHkDznhctl9g86fsUMyBAMxIkQKIF',
      redirect_uri: `${ window.location.origin }`
    })
  ) as Observable<Auth0Client>).pipe(
    shareReplay(1), // Every subscription receives the same shared value
    catchError(err => throwError(err))
  );

  isAuthenticated$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.isAuthenticated())),
    tap(res =>
    {
      this.loggedIn = res;
      if (this.loggedIn == true) {
        this.ApiService.GetToken();
      }
    })
  );
  handleRedirectCallback$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.handleRedirectCallback()))
  );

  private userProfileSubject$ = new BehaviorSubject<any>(null);
  userProfile$ = this.userProfileSubject$.asObservable();

  loggedIn: boolean = null;

  constructor(private router: Router, private ApiService: MmCryptoService)
  {
    this.localAuthSetup();

    this.handleAuthCallback();
  }


  getUser$(options?): Observable<any>
  {
    return this.auth0Client$.pipe(
      concatMap((client: Auth0Client) => from(client.getUser(options))),
      tap(user => this.userProfileSubject$.next(user))
    );
  }

  private localAuthSetup()
  {

    const checkAuth$ = this.isAuthenticated$.pipe(
      concatMap((loggedIn: boolean) =>
      {
        if (loggedIn) {
          return this.getUser$();
        }

        return of(loggedIn);
      })
    );
    checkAuth$.subscribe();
  }

  login(redirectPath: string = '/')
  {
    this.auth0Client$.subscribe((client: Auth0Client) =>
    {

      client.loginWithRedirect({
        redirect_uri: `${ window.location.origin }`,
        appState: { target: redirectPath }
      });
    });
  }

  private handleAuthCallback()
  {

    const params = window.location.search;
    if (params.includes('code=') && params.includes('state=')) {
      let targetRoute: string;
      const authComplete$ = this.handleRedirectCallback$.pipe(

        tap(cbRes =>
        {

          targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
        }),
        concatMap(() =>
        {
          return combineLatest([
            this.getUser$(),
            this.isAuthenticated$,
          ]);
        })
      );

      authComplete$.subscribe(([user, loggedIn]) =>
      {
        this.router.navigate([targetRoute]);
      });
    }
  }

  logout()
  {
    this.ApiService.DeleteToken();

    this.auth0Client$.subscribe((client: Auth0Client) =>
    {
      client.logout({
        client_id: 'YxgSHkDznhctl9g86fsUMyBAMxIkQKIF',
        returnTo: `${ window.location.origin }`
      });
    });

  }

}
