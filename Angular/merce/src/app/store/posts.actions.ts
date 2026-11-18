import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Post } from '../core/models/post.model';
import { Comment, NewComment } from '../core/models/comment.model';

export const PostsActions = createActionGroup({
  source: 'Posts',
  events: {
    'Load Posts': emptyProps(),
    'Load Posts Success': props<{ posts: Post[] }>(),
    'Load Posts Failure': props<{ error: string }>(),

    'Load Post': props<{ postId: number }>(),
    'Load Post Success': props<{ post: Post }>(),
    'Load Post Failure': props<{ error: string }>(),

    'Load Comments': props<{ postId: number }>(),
    'Load Comments Success': props<{ comments: Comment[] }>(),
    'Load Comments Failure': props<{ error: string }>(),

    'Add Comment': props<{ comment: NewComment }>(),
    'Add Comment Success': props<{ comment: Comment }>(),
    'Add Comment Failure': props<{ error: string }>(),

    'Clear Detail': emptyProps()
  }
});
