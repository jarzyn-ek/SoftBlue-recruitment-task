import { Component, Input } from '@angular/core';
import { ExperienceItem } from '../../models/experience-item.model';

@Component({
  selector: 'app-show-all-experiences',
  templateUrl: './show-all-experiences.component.html',
  styleUrls: ['./show-all-experiences.component.scss'],
})
export class ShowAllExperiencesComponent {
  @Input() experiences: ExperienceItem[];
}
