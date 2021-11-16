import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTaskAlertComponent } from './info-task-alert.component';

describe('InfoTaskAlertComponent', () => {
  let component: InfoTaskAlertComponent;
  let fixture: ComponentFixture<InfoTaskAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoTaskAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTaskAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
