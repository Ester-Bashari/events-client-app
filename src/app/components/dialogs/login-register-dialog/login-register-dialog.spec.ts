import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginRegisterDialog} from './login-register-dialog';

describe('LoginRegisterDialog', () => {
  let component: LoginRegisterDialog;
  let fixture: ComponentFixture<LoginRegisterDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginRegisterDialog]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginRegisterDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
