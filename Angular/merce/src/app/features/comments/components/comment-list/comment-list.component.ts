import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Comment } from '../../../../core/models/comment.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class CommentListComponent {
  @Input({ required: true }) comments: Comment[] = [];

  trackById(_: number, comment: Comment): number {
    return comment.id;
  }

  initial(email: string): string {
    return email.trim().charAt(0).toUpperCase() || '?';
  }
}
