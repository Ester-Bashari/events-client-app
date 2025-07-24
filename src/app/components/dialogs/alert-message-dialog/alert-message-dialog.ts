import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-alert-message-dialog',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatIcon,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatIcon
  ],
  templateUrl: './alert-message-dialog.html',
  standalone: true,
  styleUrl: './alert-message-dialog.scss'
})

export class AlertMessageDialog implements OnInit {
  icon!: string;
  iconColor!: string;
  borderColor!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: AlertMessageData) {
  }

  ngOnInit(): void {
    this.initMessageStyle();
  }

  private initMessageStyle(): void {
    switch (this.data.type) {
      case AlertMessageType.ERROR:
        this.icon = 'error'
        this.iconColor = 'text-danger'
        this.borderColor = 'border-danger'
        break;
      case AlertMessageType.WARNING:
        this.icon = 'warning'
        this.iconColor = 'text-warning'
        this.borderColor = 'border-warning'
        break;
      case AlertMessageType.SUCCESS:
        this.icon = 'check_circle'
        this.iconColor = 'text-success'
        this.borderColor = 'border-success'
        break;
      case AlertMessageType.INFO:
      default:
        this.icon = 'info'
        this.iconColor = 'text-info'
        this.borderColor = 'border-info'
        break;
    }
  }
}

export class AlertMessageData {
  constructor(public title: string,
              public message: string,
              public type: AlertMessageType) {
  }
}

export enum AlertMessageType {
  INFO,
  SUCCESS,
  WARNING,
  ERROR
}
