import { Component } from '@angular/core';
import { CoverComponent } from '../../components/cover/cover.component';
import { NavBarComponent } from '../../components/navBar/navBar.component';
import { NavBarItems } from '../../components/navBar/navBarItems/navBarItems.component';
import WordpressPackage from '../../../data/WordpressPackage.json';
import { NgFor } from '@angular/common';

@Component({
    selector: 'home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CoverComponent, NavBarComponent, NavBarItems, NgFor]
})

export class HomeComponent {

    wordPressPackage : any = WordpressPackage;
    columnKeys: string[] = [];

    ngOnInit(): void {
        this.columnKeys = Object.keys(this.wordPressPackage[0].columns);
        console.log(this.wordPressPackage);
        console.log(this.columnKeys);
      }
}