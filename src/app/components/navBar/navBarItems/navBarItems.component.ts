import {Component, QueryList, AfterContentInit, ContentChildren, Input} from "@angular/core";

@Component({
    selector: 'nav-item',
    standalone: true,
    templateUrl: './navBarItems.component.html',
    styleUrl: './navBarItems.component.css'
})

export class NavBarItems {

    @Input() href : string = "";
    @Input() name : string = "";
    @Input() active : boolean = false;
    
}