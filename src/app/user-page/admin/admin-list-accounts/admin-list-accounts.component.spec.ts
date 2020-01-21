import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListAccountsComponent } from './admin-list-accounts.component';

describe('AdminListAccountsComponent', () => {
  let component: AdminListAccountsComponent;
  let fixture: ComponentFixture<AdminListAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
