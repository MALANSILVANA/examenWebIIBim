import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDelUsuarioComponent } from './perfil-del-usuario.component';

describe('PerfilDelUsuarioComponent', () => {
  let component: PerfilDelUsuarioComponent;
  let fixture: ComponentFixture<PerfilDelUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilDelUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDelUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
