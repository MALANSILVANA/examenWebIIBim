import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButonTransferirComponent } from './buton-transferir.component';

describe('ButonTransferirComponent', () => {
  let component: ButonTransferirComponent;
  let fixture: ComponentFixture<ButonTransferirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButonTransferirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButonTransferirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
