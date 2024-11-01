import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleDisplayComponent } from './title-display/title-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TitleDisplayComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-angular-app';
}
