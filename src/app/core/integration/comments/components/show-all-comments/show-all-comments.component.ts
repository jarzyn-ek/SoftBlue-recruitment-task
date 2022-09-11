import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Comment } from '../../models/comment.model';
import { NUMBER_OF_ELEMENTS_PER_PAGE } from '../../../../config/comments.config';

@Component({
  selector: 'app-show-all-comments',
  templateUrl: './show-all-comments.component.html',
  styleUrls: ['./show-all-comments.component.scss'],
})
export class ShowAllCommentsComponent {
  @Input() comments: Comment[];

  activeComments: Comment[];

  elementsPerPage = NUMBER_OF_ELEMENTS_PER_PAGE;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  handleActiveCommentsChange(activeComments: Comment[]): void {
    this.activeComments = activeComments;
    this.changeDetectorRef.detectChanges();
  }
}
