import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ArticleComponent } from './components/article/article.component';
import { reducers } from './store/reducers';
import { ArticleService } from '../shared/services/article.service';
import { TagListModule } from '../shared/modules/tag-list/tag-list.module';
import { ArticleSelfService } from './services/articleSelf.service';
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect';

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    RouterModule.forChild(routes),
    TagListModule,
  ],
  declarations: [ArticleComponent],
  exports: [],
  providers: [ArticleService, ArticleSelfService],
})
export class ArticleModule {}
