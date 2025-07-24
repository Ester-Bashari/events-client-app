import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {UserAccountMenu} from '../user-account-menu/user-account-menu';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    UserAccountMenu,
  ],
  templateUrl: './header.html',
  standalone: true,
  styleUrl: './header.scss'
})
export class Header {
}
