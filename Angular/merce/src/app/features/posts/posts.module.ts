import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { CommentsModule } from '../comments/comments.module';
import { PostListPageComponent } from './pages/post-list-page/post-list-page.component';
import { PostDetailPageComponent } from './pages/post-detail-page/post-detail-page.component';
import { PostCardComponent } from './components/post-card/post-card.component';

@NgModule({
  declarations: [PostListPageComponent, PostDetailPageComponent, PostCardComponent],
  imports: [CommonModule, PostsRoutingModule, CommentsModule]
})
export class PostsModule {}
