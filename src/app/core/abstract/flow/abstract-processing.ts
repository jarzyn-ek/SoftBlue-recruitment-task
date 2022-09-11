import { Directive, EventEmitter, Output } from '@angular/core';

@Directive()
export abstract class AbstractProcessingDirective {
  @Output() processingDone = new EventEmitter<void>();
}
