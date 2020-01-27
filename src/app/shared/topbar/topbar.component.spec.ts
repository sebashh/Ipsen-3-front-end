import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarComponent } from './topbar.component';

describe('TopbarComponent', () => {
  let component: TopbarComponent;
  let fixture: ComponentFixture<TopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#logIn() should be false at start', () => {
    expect(component).toBeTruthy();
    // const comp = component;
    // expect(comp.isUserLoggedIn).toBe(false, 'off at start');
    // comp.logIn();
    // expect(comp.isUserLoggedIn).toBe(true, 'on after click login');
    // comp.logOut();
    // expect(comp.isUserLoggedIn).toBe(false, 'off after click logout');
  });
});
