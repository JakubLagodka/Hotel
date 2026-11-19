import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of, switchMap } from 'rxjs';
import { PostsApiService } from '../core/services/posts-api.service';
import { PostsActions } from './posts.actions';

@Injectable()
export class PostsEffects {
  private readonly actions$ = inject(Actions);
  private readonly api = inject(PostsApiService);

  readonly loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.loadPosts),
      switchMap(() =>
        this.api.getPosts().pipe(
          map((posts) => PostsActions.loadPostsSuccess({ posts })),
          catchError(() => of(PostsActions.loadPostsFailure({ error: 'Could not load posts.' })))
        )
      )
    )
  );

  readonly loadPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.loadPost),
      switchMap(({ postId }) =>
        this.api.getPost(postId).pipe(
          map((post) => PostsActions.loadPostSuccess({ post })),
          catchError(() => of(PostsActions.loadPostFailure({ error: 'Could not load this post.' })))
        )
      )
    )
  );

  readonly loadComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.loadComments),
      switchMap(({ postId }) =>
        this.api.getComments(postId).pipe(
          map((comments) => PostsActions.loadCommentsSuccess({ comments })),
          catchError(() => of(PostsActions.loadCommentsFailure({ error: 'Could not load comments.' })))
        )
      )
    )
  );

  readonly addComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.addComment),
      concatMap(({ comment }) =>
        this.api.addComment(comment).pipe(
          map((savedComment) => PostsActions.addCommentSuccess({ comment: savedComment })),
          catchError(() => of(PostsActions.addCommentFailure({ error: 'Could not add the comment.' })))
        )
      )
    )
  );
}
