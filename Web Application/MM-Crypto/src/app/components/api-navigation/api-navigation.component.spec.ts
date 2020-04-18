import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiNavigationComponent } from './api-navigation.component';

describe('ApiNavigationComponent', () => {
  let component: ApiNavigationComponent;
  let fixture: ComponentFixture<ApiNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
