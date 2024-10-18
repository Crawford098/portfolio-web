import { Component } from '@angular/core';
import { IconLink } from '../iconLink/iconLink.component';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [IconLink],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.css',
})
export class CoverComponent {
  skill: string[] = ['Web developer', 'App Developer', 'otra opcion'];

  changeSkill(): string {
    return this.skill[0];
  }
}
