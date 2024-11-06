import { Component } from '@angular/core';
import { CoverComponent } from '../../components/cover/cover.component';
import WordpressPackage from '../../../data/WordpressPackage.json';
import { NgFor } from '@angular/common';
import { Price } from '../../components/price/price.component';

@Component({
    selector: 'home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CoverComponent, NgFor, Price]
})

export class HomeComponent {

}