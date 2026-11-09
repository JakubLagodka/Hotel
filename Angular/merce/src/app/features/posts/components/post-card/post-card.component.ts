import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from '../../../../core/models/post.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class PostCardComponent {
  @Input({ required: true }) post!: Post;

  iconFor(id: number): string {
    const icons = ['✱', '</>', '⌘', '⊙'];
    return icons[(id - 1) % icons.length];
  }
}
