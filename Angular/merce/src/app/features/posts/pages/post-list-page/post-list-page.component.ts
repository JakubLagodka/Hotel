import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../../../core/models/post.model';
import { PostsActions } from '../../../../store/posts.actions';
import { selectError, selectListLoading, selectPosts } from '../../../../store/posts.selectors';

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class PostListPageComponent implements OnInit {
  readonly posts$: Observable<Post[]> = this.store.select(selectPosts);
  readonly loading$: Observable<boolean> = this.store.select(selectListLoading);
  readonly error$: Observable<string | null> = this.store.select(selectError);

  readonly pageSize = 4;
  readonly maxDesignPages = 6;
  page = 1;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(PostsActions.loadPosts());
  }

  visiblePosts(posts: Post[]): Post[] {
    const start = (this.page - 1) * this.pageSize;
    return posts.slice(0, this.pageSize * this.maxDesignPages).slice(start, start + this.pageSize);
  }

  pageCount(posts: Post[]): number {
    return Math.max(1, Math.min(this.maxDesignPages, Math.ceil(posts.length / this.pageSize)));
  }

  previous(): void {
    this.page = Math.max(1, this.page - 1);
  }

  next(totalPages: number): void {
    this.page = Math.min(totalPages, this.page + 1);
  }

  twoDigits(value: number): string {
    return value.toString().padStart(2, '0');
  }

  trackByPostId(_: number, post: Post): number {
    return post.id;
  }
}
