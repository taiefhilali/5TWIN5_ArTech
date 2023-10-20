import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdminCommandeComponent } from './list-admin-commande.component';

describe('ListAdminCommandeComponent', () => {
  let component: ListAdminCommandeComponent;
  let fixture: ComponentFixture<ListAdminCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdminCommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAdminCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
