import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEditorComponent } from './api-editor.component';

describe('ApiEditorComponent', () => {
  let component: ApiEditorComponent;
  let fixture: ComponentFixture<ApiEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
