import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentsService } from '../../services/comments.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent implements OnInit, OnDestroy {
  private ngUnsubscribe$ = new Subject<void>();

  addCommentFormGroup: FormGroup;

  @Output() newCommentAdded = new EventEmitter<void>();

  constructor(
    private formBuilder: FormBuilder,
    private commentsService: CommentsService
  ) {}

  ngOnInit(): void {
    this.addCommentFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  addComment(): void {
    const { name, email, message } = this.addCommentFormGroup.controls;
    this.commentsService
      .addComment({
        name: name.value,
        email: email.value,
        content: message.value,
      })
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((_) => this.newCommentAdded.next());
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
