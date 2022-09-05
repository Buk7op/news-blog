import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedToglerComponent } from './components/feed-togler/feed-togler.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FeedToglerComponent],
  imports: [CommonModule, RouterModule],
  exports: [FeedToglerComponent],
})
export class FeedToglerModule {}
