import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWeekViewComponent } from './ngx-week-view.component';

describe('NgxWeekViewComponent', () => {
  let component: NgxWeekViewComponent;
  let fixture: ComponentFixture<NgxWeekViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxWeekViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxWeekViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
