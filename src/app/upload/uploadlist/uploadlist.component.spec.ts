import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadlistComponent } from './uploadlist.component';

describe('UploadlistComponent', () => {
  let component: UploadlistComponent;
  let fixture: ComponentFixture<UploadlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
