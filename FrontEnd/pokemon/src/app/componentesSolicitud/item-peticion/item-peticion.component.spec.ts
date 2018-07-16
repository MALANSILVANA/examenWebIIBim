import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPeticionComponent } from './item-peticion.component';

describe('ItemPeticionComponent', () => {
  let component: ItemPeticionComponent;
  let fixture: ComponentFixture<ItemPeticionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPeticionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
