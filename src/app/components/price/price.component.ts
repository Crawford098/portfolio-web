import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector: "Price",
    templateUrl: "./price.component.html",
    styleUrl: "./price.component.css",
    standalone: true,
    imports: [NgFor]
})

export class Price {

    @Input("package") package: any = {};
    columnKeys: string[] = [];

    ngOnInit(): void {
        this.columnKeys = Object.keys(this.package.columns);
    }
}