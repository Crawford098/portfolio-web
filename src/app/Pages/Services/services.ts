import { Component } from '@angular/core';
import WordpressPackage from '../../../data/WordpressPackage.json';
import { NgFor } from '@angular/common';
import { Price } from '../../components/price/price.component';

@Component({
  selector: 'services-page',
  standalone: true,
  templateUrl: './services.html',
  styleUrl: './services.css',
  imports: [ NgFor, Price],
})

export class Services {
  wordPressPackage: any = WordpressPackage;
  columnKeys: string[] = [];

  ngOnInit(): void {
    this.columnKeys = Object.keys(this.wordPressPackage[0].columns);
  }
}
