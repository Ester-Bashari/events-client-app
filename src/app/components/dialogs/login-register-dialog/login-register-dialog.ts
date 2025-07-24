import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatDialogActions, MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import {MatTab, MatTabGroup, MatTabsModule} from '@angular/material/tabs';
import {LoginRequest, RegisterRequest, UserData} from '../../../../types/types';
import {UserController} from '../../../services/api-controllers/user-controller';
import {DialogService} from '../../../services/dialog-service';
import {AlertMessageData, AlertMessageDialog, AlertMessageType} from '../alert-message-dialog/alert-message-dialog';
import {InputField, InputFieldConfigs, InputFieldValidator, InputType} from '../../input-field/input-field';

@Component({
  selector: 'app-login-register-dialog',
  imports: [
    FormsModule,
    MatTabsModule,
    MatButton,
    MatDialogActions,
    MatTab,
    MatTabGroup,
    ReactiveFormsModule,
    InputField,
    MatDialogContent
  ],
  templateUrl: './login-register-dialog.html',
  standalone: true,
  styleUrl: './login-register-dialog.scss'
})
export class LoginRegisterDialog {
  loginFormGroup!: FormGroup;
  registerFormGroup!: FormGroup;
  loginFieldsConfigs: InputFieldConfigs[] = [];
  registerFieldsConfigs: InputFieldConfigs[] = [];
  selectedTabIndex: number = 0;

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<LoginRegisterDialog>,
              private dialogService: DialogService,
              private userController: UserController) {
    this.initLoginForm();
    this.initRegisterForm();
  }

  initLoginForm() {
    this.loginFieldsConfigs.push(
      new InputFieldConfigs('email', '', InputType.EMAIL,
        {
          required: new InputFieldValidator(Validators.required, "זהו שדה חובה"),
          email: new InputFieldValidator(Validators.email, "אימייל לא תקין")
        }, "אימייל", true, 'email'),
      new InputFieldConfigs('password', '', InputType.PASSWORD,
        {
          required: new InputFieldValidator(Validators.required, "זהו שדה חובה")
        }, "סיסמה", true, 'current-password')
    );

    this.loginFormGroup = this.formBuilder.group({});
  }

  initRegisterForm() {
    this.registerFieldsConfigs.push(
      new InputFieldConfigs('fullName', '', InputType.TEXT,
        {
          required: new InputFieldValidator(Validators.required, "זהו שדה חובה")
        }, "שם מלא", true, 'name'),
      new InputFieldConfigs('email', '', InputType.EMAIL,
        {
          required: new InputFieldValidator(Validators.required, "זהו שדה חובה"),
          email: new InputFieldValidator(Validators.email, "אימייל לא תקין")
        }, "אימייל", true, 'email'),
      new InputFieldConfigs('password', '', InputType.PASSWORD,
        {
          required: new InputFieldValidator(Validators.required, "זהו שדה חובה")
        }, "סיסמה", true, 'new-password'),
      new InputFieldConfigs('passwordValidation', '', InputType.PASSWORD,
        {
          required: new InputFieldValidator(Validators.required, "זהו שדה חובה")
        }, "אימות סיסמה", true, 'new-password')
    );

    this.registerFormGroup = this.formBuilder.group({});
  }

  close(userData?: UserData): void {
    this.dialogRef.close(userData);
  }

  register(): void {
    if (this.registerFormGroup.invalid)
      return;

    this.userController.register(<RegisterRequest>this.registerFormGroup.value)
      .subscribe({
        next: (userData: UserData): void => {
          this.close(userData);
          const successMessage: string = "נרשמת בהצלחה!";
          const data: AlertMessageData = new AlertMessageData("איזה כיף!", successMessage, AlertMessageType.SUCCESS);
          this.dialogService.open<AlertMessageDialog, AlertMessageData>(AlertMessageDialog, data);
        },
        error: (err): void => {
          const data: AlertMessageData = new AlertMessageData("אופס...", err.message, AlertMessageType.ERROR);
          this.dialogService.open<AlertMessageDialog, AlertMessageData>(AlertMessageDialog, data);
        }
      });
  }

  login(): void {
    if (this.loginFormGroup.invalid)
      return;

    this.userController.login(<LoginRequest>this.loginFormGroup.value)
      .subscribe({
        next: (userData: UserData): void => {
          this.close(userData);
        },
        error: (err): void => {
          const data: AlertMessageData = new AlertMessageData("אופס...", err.message, AlertMessageType.ERROR);
          this.dialogService.open<AlertMessageDialog, AlertMessageData>(AlertMessageDialog, data);
        }
      });
  }
}
