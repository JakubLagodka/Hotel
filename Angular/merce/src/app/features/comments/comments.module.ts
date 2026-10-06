import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';

@NgModule({
  declarations: [CommentListComponent, CommentFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CommentListComponent, CommentFormComponent]
})
export class CommentsModule {}
