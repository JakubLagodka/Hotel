import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../../../core/models/post.model';
import { Comment, NewComment } from '../../../../core/models/comment.model';
import { PostsActions } from '../../../../store/posts.actions';
import {
  selectCommentSubmitting,
  selectComments,
  selectDetailLoading,
  selectError,
  selectSelectedPost
} from '../../../../store/posts.selectors';

@Component({
  selector: 'app-post-detail-page',
  templateUrl: './post-detail-page.component.html',
  styleUrls: ['./post-detail-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class PostDetailPageComponent implements OnInit, OnDestroy {
  readonly post$: Observable<Post | null> = this.store.select(selectSelectedPost);
  readonly comments$: Observable<Comment[]> = this.store.select(selectComments);
  readonly loading$: Observable<boolean> = this.store.select(selectDetailLoading);
  readonly submitting$: Observable<boolean> = this.store.select(selectCommentSubmitting);
  readonly error$: Observable<string | null> = this.store.select(selectError);

  postId = 0;
  addingComment = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));

    if (!Number.isInteger(this.postId) || this.postId < 1) {
      return;
    }

    this.store.dispatch(PostsActions.loadPost({ postId: this.postId }));
    this.store.dispatch(PostsActions.loadComments({ postId: this.postId }));
  }

  ngOnDestroy(): void {
    this.store.dispatch(PostsActions.clearDetail());
  }

  showCommentForm(): void {
    this.addingComment = true;
  }

  hideCommentForm(): void {
    this.addingComment = false;
  }

  addComment(comment: NewComment): void {
    this.store.dispatch(PostsActions.addComment({ comment }));
    this.addingComment = false;
  }
}
