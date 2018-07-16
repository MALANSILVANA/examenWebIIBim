import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRechazarComponent } from './btn-rechazar.component';

describe('BtnRechazarComponent', () => {
  let component: BtnRechazarComponent;
  let fixture: ComponentFixture<BtnRechazarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnRechazarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnRechazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
