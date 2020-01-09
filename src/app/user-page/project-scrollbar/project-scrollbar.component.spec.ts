import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectScrollbarComponent } from './project-scrollbar.component';

describe('ScrollbarComponent', () => {
  let component: ProjectScrollbarComponent;
  let fixture: ComponentFixture<ProjectScrollbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectScrollbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
