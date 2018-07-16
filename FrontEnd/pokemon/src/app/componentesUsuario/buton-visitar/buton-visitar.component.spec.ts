import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButonVisitarComponent } from './buton-visitar.component';

describe('ButonVisitarComponent', () => {
  let component: ButonVisitarComponent;
  let fixture: ComponentFixture<ButonVisitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButonVisitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButonVisitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
