import { Component } from '@angular/core';
import { NAVIGATION_CONFIG } from '../../config/navigation.config';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  configs = NAVIGATION_CONFIG;

  scrollToComments(): void {
    const el = document.getElementById('comments');
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
