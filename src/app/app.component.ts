import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoverComponent } from './components/cover/cover.component'
import { NavBarComponent } from "./components/navBar/navBar.component";
import { NavBarItems } from './components/navBar/navBarItems/navBarItems.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoverComponent, NavBarComponent, NavBarItems],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
