import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProjectViewComponent } from './client-project-view.component';

describe('ClientProjectViewComponent', () => {
  let component: ClientProjectViewComponent;
  let fixture: ComponentFixture<ClientProjectViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientProjectViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
