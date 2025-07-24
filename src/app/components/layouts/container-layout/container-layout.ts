import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-container-layout',
  imports: [
    RouterOutlet
  ],
  templateUrl: './container-layout.html',
  standalone: true,
  styleUrl: './container-layout.scss'
})
export class ContainerLayout {

}
