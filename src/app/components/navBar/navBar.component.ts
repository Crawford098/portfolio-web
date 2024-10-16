import { Component, } from '@angular/core';
import { NavBarItems } from './navBarItems/navBarItems.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'navBar',
  standalone: true,
  templateUrl: './navBar.component.html',
  imports: [ NavBarItems, NgFor ],
  styleUrl: './navBar.component.css',
})

export class NavBarComponent {

}