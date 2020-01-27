import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListProjectsComponent } from './admin-list-projects.component';

describe('AdminListProjectsComponent', () => {
  let component: AdminListProjectsComponent;
  let fixture: ComponentFixture<AdminListProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
