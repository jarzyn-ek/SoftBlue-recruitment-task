import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ExperienceItem } from './models/experience-item.model';
import { ExperienceService } from './services/experience.service';
import { AbstractProcessingDirective } from '../../core/abstract/flow/abstract-processing';

@Component({
  selector: 'app-experience-short',
  templateUrl: './experience-short.component.html',
  styleUrls: ['./experience-short.component.scss'],
})
export class ExperienceShortComponent
  extends AbstractProcessingDirective
  implements OnInit, OnDestroy
{
  private ngUnsubscribe$ = new Subject<void>();

  experiences: ExperienceItem[] = [];

  constructor(private experienceService: ExperienceService) {
    super();
  }

  ngOnInit(): void {
    this.experienceService
      .getExperienceItems()
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((experienceItems: ExperienceItem[]) => {
        this.experiences = experienceItems;
        this.processingDone.emit();
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
