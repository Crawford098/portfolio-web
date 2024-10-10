import { Component } from '@angular/core';
import { IconLink } from '../components/iconLink/iconLink.component';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [IconLink],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css',
})
export class ResumenComponent {
  skill: string[] = ['Web developer', 'App Developer', 'otra opcion'];

  changeSkill(): string {
    return this.skill[0];
  }
}
