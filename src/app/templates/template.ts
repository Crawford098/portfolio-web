import { Component } from "@angular/core";
import { NavBarComponent } from "../components/navBar/navBar.component";
import { NavBarItems } from "../components/navBar/navBarItems/navBarItems.component";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Footer } from "./components/footer";

@Component({
    selector: 'app-template',
    templateUrl: './template.html',
    styleUrl: './template.css',
    standalone: true,
    imports: [ NavBarComponent, NavBarItems, RouterLink, RouterLinkActive, Footer ]
})

export class Template {

}