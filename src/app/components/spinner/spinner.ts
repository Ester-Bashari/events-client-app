import {Component} from '@angular/core';
import {NgxSpinnerComponent} from 'ngx-spinner';

@Component({
  selector: 'app-spinner',
  imports: [
    NgxSpinnerComponent
  ],
  templateUrl: './spinner.html',
  standalone: true,
  styleUrl: './spinner.scss'
})
export class Spinner {

}
