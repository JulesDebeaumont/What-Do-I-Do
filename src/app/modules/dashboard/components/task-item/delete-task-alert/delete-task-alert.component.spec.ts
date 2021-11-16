import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTaskAlertComponent } from './delete-task-alert.component';

describe('DeleteTaskAlertComponent', () => {
  let component: DeleteTaskAlertComponent;
  let fixture: ComponentFixture<DeleteTaskAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTaskAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTaskAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
