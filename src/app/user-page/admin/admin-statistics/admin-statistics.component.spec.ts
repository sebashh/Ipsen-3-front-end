import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatisticsComponent } from './admin-statistics.component';

describe('AdminStatisticsComponent', () => {
  let component: AdminStatisticsComponent;
  let fixture: ComponentFixture<AdminStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
