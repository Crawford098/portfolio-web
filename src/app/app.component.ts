import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Pages/Home/home.component';
import { Template } from './templates/template';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, HomeComponent, Template ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
