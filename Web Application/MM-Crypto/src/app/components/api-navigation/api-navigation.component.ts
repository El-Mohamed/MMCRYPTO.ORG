import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-api-navigation',
  templateUrl: './api-navigation.component.html',
  styleUrls: ['./api-navigation.component.css']
})
export class ApiNavigationComponent implements OnInit
{

  constructor(public auth: AuthService) { }

  ngOnInit(): void
  {
  }

  OpenDocumentation()
  {
    window.open('https://documenter.getpostman.com/view/11121025/Szf9V6zz?version=latest');
  }

}
