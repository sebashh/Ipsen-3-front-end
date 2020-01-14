import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListFilterComponent } from './project-list-filter.component';

describe('ProjectListFilterComponent', () => {
  let component: ProjectListFilterComponent;
  let fixture: ComponentFixture<ProjectListFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectListFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
