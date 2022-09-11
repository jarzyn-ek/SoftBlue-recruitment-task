import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommentsService } from './services/comments.service';
import { Comment } from './models/comment.model';
import { mergeMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { isBefore } from '../../utils/date.utils';

enum SortOption {
  OLDEST = 'OLDEST',
  NEWEST = 'NEWEST',
  NONE = 'NONE',
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit, OnDestroy {
  private ngUnsubscribe$ = new Subject();

  comments: Comment[];

  updateComments = new Subject();

  sortOption = SortOption.NONE;

  sortOptionEnum: typeof SortOption = SortOption;

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.updateComments
      .pipe(
        mergeMap((_) => this.commentsService.getComments()),
        takeUntil(this.ngUnsubscribe$)
      )
      .subscribe((comments) => (this.comments = [...comments]));
    this.updateComments.next();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  handleSortOptionChange(option: SortOption): void {
    if (this.sortOption === option) {
      return;
    }
    if (this.sortOption === SortOption.NONE) {
      this.sortOption = option;
      this.comments = [...this.doSorting()];
    } else {
      this.sortOption = option;
      this.comments = [...this.comments.reverse()];
    }
  }

  doSorting(): Comment[] {
    switch (this.sortOption) {
      case SortOption.NEWEST:
        return this.comments.sort((a, b) => isBefore(a.createdAt, b.createdAt));
      case SortOption.OLDEST:
        return this.comments.sort((a, b) => isBefore(b.createdAt, a.createdAt));
    }
  }
}
