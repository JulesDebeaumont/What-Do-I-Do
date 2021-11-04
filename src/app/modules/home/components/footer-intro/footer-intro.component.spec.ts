import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterIntroComponent } from './footer-intro.component';

describe('FooterIntroComponent', () => {
  let component: FooterIntroComponent;
  let fixture: ComponentFixture<FooterIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
