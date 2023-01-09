import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincoachComponent } from './logincoach.component';

describe('LogincoachComponent', () => {
  let component: LogincoachComponent;
  let fixture: ComponentFixture<LogincoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogincoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
