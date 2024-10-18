import {Component, QueryList, AfterContentInit, ContentChildren, Input} from "@angular/core";

@Component({
    selector: 'nav-item',
    standalone: true,
    templateUrl: './navBarItems.component.html',
    styleUrls: ['./navBarItems.component.css', '../navBar.component.css']
})

export class NavBarItems {

    @Input() href : string = "";
    @Input() name : string = "";
    @Input() active : boolean = false;
    
}