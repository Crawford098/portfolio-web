import { Component, Input, Injectable, input } from '@angular/core';

@Component({
    selector: 'icon-link',
    standalone: true,
    imports: [],
    templateUrl: './iconLink.component.html',
    styleUrl: './iconLink.component.css',
})

@Injectable({
    providedIn: 'root'
})

export class IconLink {

    @Input() iconUrl: string = "";
    @Input() alt: string = "";
    @Input() width: number = 50;
    @Input() height: number = 50;
    @Input() url: string = "#";
    @Input() target: string = "";
}