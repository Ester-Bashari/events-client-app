import {Component, Input, OnInit} from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn
} from '@angular/forms';
import {MatError, MatFormField, MatInput, MatLabel, MatSuffix} from '@angular/material/input';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-input-field',
  imports: [
    FormsModule,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatSuffix,
  ],
  templateUrl: './input-field.html',
  standalone: true,
  styleUrl: './input-field.scss',
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class InputField implements OnInit {
  @Input() configs!: InputFieldConfigs;

  control!: FormControl;
  type!: string;
  hidePassword: boolean = true;

  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.initControl();
    this.type = this.configs.type;
  }

  initControl(): void {
    const validators: ValidatorFn[] = Object.values(this.configs.validators)
      .map((validator: InputFieldValidator) => validator.validation);

    this.control = new FormControl(this.configs.value, validators);

    (this.controlContainer.control as FormGroup)
      .addControl(this.configs.controlName, this.control);
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
    this.type = this.hidePassword
      ? InputType.PASSWORD
      : InputType.TEXT;
  }


  getKeys(obj: object | null | undefined): string[] {
    if (!obj)
      return [];
    return Object.keys(obj);
  }

  protected readonly InputType = InputType;
}

export enum InputType {
  TEXT = "text",
  NUMBER = "number",
  EMAIL = "email",
  PASSWORD = "password"
}

export class InputFieldValidator {
  constructor(public validation: ValidatorFn,
              public message: string) {
  }
}

export class InputFieldConfigs {
  constructor(public controlName: string,
              public value: string | number,
              public type: InputType,
              public validators: Record<string, InputFieldValidator>,
              public label: string | null = null,
              public isRequired: boolean = false,
              public autocomplete: string = "off") {
  }
}
