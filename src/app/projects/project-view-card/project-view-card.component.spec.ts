import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectViewCardComponent } from './project-view-card.component';

describe('ProjectViewCardComponent', () => {
  let component: ProjectViewCardComponent;
  let fixture: ComponentFixture<ProjectViewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectViewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
