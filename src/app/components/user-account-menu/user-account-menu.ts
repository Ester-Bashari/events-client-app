import {Component} from '@angular/core';
import {UserController} from '../../services/api-controllers/user-controller';
import {UserData} from '../../../types/types';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';
import {Router, RouterLink} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {LoginRegisterDialog} from '../dialogs/login-register-dialog/login-register-dialog';
import {DialogService} from '../../services/dialog-service';

@Component({
  selector: 'app-user-account-menu',
  imports: [
    MatMenuTrigger,
    MatIcon,
    MatMenu,
    RouterLink,
    MatMenuItem
  ],
  templateUrl: './user-account-menu.html',
  standalone: true,
  styleUrl: './user-account-menu.scss'
})
export class UserAccountMenu {
  userData!: UserData | null;

  constructor(private dialogService: DialogService,
              private userController: UserController,
              private router: Router) {
    this.initLoggedInUser();
  }

  initLoggedInUser(): void {
    this.userController.getUser()
      .subscribe({
        next: (userData: UserData): void => {
          this.userData = userData;
        },
        error: (err): void => {
          if (!this.isHome()) {
            this.navigateHome();
            this.openLoginDialog();
          }
        }
      });
  }

  openLoginDialog(): void {
    const dialogRef: MatDialogRef<LoginRegisterDialog> = this.dialogService.open<LoginRegisterDialog, void>(LoginRegisterDialog);

    dialogRef.afterClosed().subscribe((userData: UserData): void => {
      this.userData = userData;
    });
  }

  logout(): void {
    this.userController.logout()
      .subscribe({
        next: (): void => {
          this.userData = null;
          this.navigateHome();
        }
      });
  }

  private isHome(): boolean {
    return this.router.url === '/'
  }

  private navigateHome(): void {
    this.router.navigate(['']);
  }
}
