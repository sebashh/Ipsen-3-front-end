import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperItemComponent } from './paper-item.component';

describe('PaperItemComponent', () => {
  let component: PaperItemComponent;
  let fixture: ComponentFixture<PaperItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
