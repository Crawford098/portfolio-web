import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './Pages/Home/home.component';
import { NavBarComponent } from './components/navBar/navBar.component';
import { NavBarItems } from './components/navBar/navBarItems/navBarItems.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HomeComponent, NavBarComponent, NavBarItems,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
