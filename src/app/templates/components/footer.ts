import { Component } from "@angular/core";
import { IconLink } from "../../components/iconLink/iconLink.component";

@Component({
    selector: 'app-footer',
    standalone:true,
    templateUrl:'./footer.html',
    styleUrl: './footer.css',
    imports: [ IconLink ]
})

export class Footer {

}