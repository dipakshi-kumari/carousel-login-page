import { Component } from '@angular/core';
import { Carousel } from './carousel/carousel';

@Component({
  selector: 'app-root',
  imports: [Carousel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-app';
}
