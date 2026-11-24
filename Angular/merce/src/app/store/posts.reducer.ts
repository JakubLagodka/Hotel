import { createReducer, on } from '@ngrx/store';
import { PostsActions } from './posts.actions';
import { initialPostsState } from './posts.state';

export const postsReducer = createReducer(
  initialPostsState,

  on(PostsActions.loadPosts, (state) => ({ ...state, listLoading: true, error: null })),
  on(PostsActions.loadPostsSuccess, (state, { posts }) => ({ ...state, posts, listLoading: false })),
  on(PostsActions.loadPostsFailure, (state, { error }) => ({ ...state, listLoading: false, error })),

  on(PostsActions.loadPost, (state) => ({ ...state, detailLoading: true, selectedPost: null, error: null })),
  on(PostsActions.loadPostSuccess, (state, { post }) => ({ ...state, selectedPost: post, detailLoading: false })),
  on(PostsActions.loadPostFailure, (state, { error }) => ({ ...state, detailLoading: false, error })),

  on(PostsActions.loadComments, (state) => ({ ...state, comments: [], error: null })),
  on(PostsActions.loadCommentsSuccess, (state, { comments }) => ({ ...state, comments })),
  on(PostsActions.loadCommentsFailure, (state, { error }) => ({ ...state, error })),

  on(PostsActions.addComment, (state) => ({ ...state, commentSubmitting: true, error: null })),
  on(PostsActions.addCommentSuccess, (state, { comment }) => ({
    ...state,
    comments: [comment, ...state.comments],
    commentSubmitting: false
  })),
  on(PostsActions.addCommentFailure, (state, { error }) => ({ ...state, commentSubmitting: false, error })),

  on(PostsActions.clearDetail, (state) => ({
    ...state,
    selectedPost: null,
    comments: [],
    detailLoading: false,
    commentSubmitting: false,
    error: null
  }))
);
