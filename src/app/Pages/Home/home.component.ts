import { Component } from '@angular/core';
import { CoverComponent } from '../../components/cover/cover.component';
import { NavBarComponent } from '../../components/navBar/navBar.component';
import { NavBarItems } from '../../components/navBar/navBarItems/navBarItems.component';

@Component({
    selector: 'home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CoverComponent, NavBarComponent, NavBarItems]
})

export class HomeComponent {

}