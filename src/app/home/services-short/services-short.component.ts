import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FeatureItem } from './models/feature-item.model';
import { ServicesService } from './services/services.service';
import { AbstractProcessingDirective } from '../../core/abstract/flow/abstract-processing';

@Component({
  selector: 'app-services-short',
  templateUrl: './services-short.component.html',
  styleUrls: ['./services-short.component.scss'],
})
export class ServicesShortComponent
  extends AbstractProcessingDirective
  implements OnInit, OnDestroy
{
  private ngUnsubscribe$ = new Subject<void>();

  features: FeatureItem[];

  constructor(private servicesService: ServicesService) {
    super();
  }

  ngOnInit(): void {
    this.servicesService
      .getFeatureItems()
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((featureItems: FeatureItem[]) => {
        this.features = featureItems;
        this.processingDone.emit();
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
