import { Post } from '../core/models/post.model';
import { Comment } from '../core/models/comment.model';

export interface PostsState {
  posts: Post[];
  selectedPost: Post | null;
  comments: Comment[];
  listLoading: boolean;
  detailLoading: boolean;
  commentSubmitting: boolean;
  error: string | null;
}

export const initialPostsState: PostsState = {
  posts: [],
  selectedPost: null,
  comments: [],
  listLoading: false,
  detailLoading: false,
  commentSubmitting: false,
  error: null
};
