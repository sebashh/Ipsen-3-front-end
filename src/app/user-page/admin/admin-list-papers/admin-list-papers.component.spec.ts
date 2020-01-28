import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListPapersComponent } from './admin-list-papers.component';

describe('AdminListPapersComponent', () => {
  let component: AdminListPapersComponent;
  let fixture: ComponentFixture<AdminListPapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListPapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
