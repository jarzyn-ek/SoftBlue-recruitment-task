import { Component, Input } from '@angular/core';
import { ExperienceItem } from '../../models/experience-item.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  @Input() experience: ExperienceItem;
}
