import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDetailsComponent } from './asset-details.component';

describe('CurrencyDetailsComponent', () => {
  let component: AssetDetailsComponent;
  let fixture: ComponentFixture<AssetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
