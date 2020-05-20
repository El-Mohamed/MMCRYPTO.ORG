import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenGenratorComponent } from './token-genrator.component';

describe('TokenGenratorComponent', () => {
  let component: TokenGenratorComponent;
  let fixture: ComponentFixture<TokenGenratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenGenratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenGenratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
