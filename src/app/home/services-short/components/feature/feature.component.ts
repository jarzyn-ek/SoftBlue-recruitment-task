import { Component, Input } from '@angular/core';
import { FeatureItem } from '../../models/feature-item.model';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent {
  @Input() featureItem: FeatureItem;

  @Input() iconName: string;
}
