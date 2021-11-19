import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActivityAlertComponent } from './delete-activity-alert.component';

describe('DeleteActivityAlertComponent', () => {
  let component: DeleteActivityAlertComponent;
  let fixture: ComponentFixture<DeleteActivityAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteActivityAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActivityAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
