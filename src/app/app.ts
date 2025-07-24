import {Component} from '@angular/core';
import {Header} from './components/header/header';
import {RouterOutlet} from '@angular/router';
import {Spinner} from './components/spinner/spinner';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, Spinner],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App {
}
