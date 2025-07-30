import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  imports: [
    MatButton,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './page-not-found.html',
  standalone: true,
  styleUrl: './page-not-found.scss'
})
export class PageNotFound {

}
