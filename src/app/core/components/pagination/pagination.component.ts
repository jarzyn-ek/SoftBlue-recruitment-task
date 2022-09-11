import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent<T> {
  private _elements: T[];

  @Input() set elements(elements: T[]) {
    this._elements = elements;
    this.handleActivePageChange(1);
  }

  @Input() elementsPerPage: number;

  @Output() activeElements = new EventEmitter<T[]>();

  activePage = 1;

  readonly shortenedVersion = this.numberOfPages > 4;

  get numberOfPages(): number {
    return Math.ceil(this._elements?.length / this.elementsPerPage);
  }

  handleActivePageChange(activePage: number): void {
    this.activePage = activePage;
    this.findActiveElements();
  }

  private findActiveElements(): void {
    this.activeElements.emit(
      this._elements.slice(
        (this.activePage - 1) * this.elementsPerPage,
        this.activePage * this.elementsPerPage
      )
    );
  }
}
