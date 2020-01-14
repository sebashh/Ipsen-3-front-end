import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMyProjectsComponent } from './client-my-projects.component';

describe('ClientMyProjectsComponent', () => {
  let component: ClientMyProjectsComponent;
  let fixture: ComponentFixture<ClientMyProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientMyProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientMyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
