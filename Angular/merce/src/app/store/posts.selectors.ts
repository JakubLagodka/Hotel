import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

export const selectPostsState = createFeatureSelector<PostsState>('posts');

export const selectPosts = createSelector(selectPostsState, (state) => state.posts);
export const selectSelectedPost = createSelector(selectPostsState, (state) => state.selectedPost);
export const selectComments = createSelector(selectPostsState, (state) => state.comments);
export const selectListLoading = createSelector(selectPostsState, (state) => state.listLoading);
export const selectDetailLoading = createSelector(selectPostsState, (state) => state.detailLoading);
export const selectCommentSubmitting = createSelector(selectPostsState, (state) => state.commentSubmitting);
export const selectError = createSelector(selectPostsState, (state) => state.error);
