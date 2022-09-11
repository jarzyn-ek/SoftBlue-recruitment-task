import { Component, Input } from '@angular/core';
import { FeatureItem } from '../../models/feature-item.model';
import { ICONS_CONFIG } from '../../../../core/config/icons.config';

@Component({
  selector: 'app-show-all-features',
  templateUrl: './show-all-features.component.html',
  styleUrls: ['./show-all-features.component.scss'],
})
export class ShowAllFeaturesComponent {
  @Input() features: FeatureItem[];

  getIconNameForFeature(feature: FeatureItem): string {
    return ICONS_CONFIG.filter((icon) => icon.id === feature.id)?.[0].iconName;
  }
}
