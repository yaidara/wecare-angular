import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachprofilComponent } from './coachprofil.component';

describe('CoachprofilComponent', () => {
  let component: CoachprofilComponent;
  let fixture: ComponentFixture<CoachprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachprofilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
