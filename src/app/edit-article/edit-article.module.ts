import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { RouterModule } from '@angular/router';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { EditArticleService } from './services/editArticle.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { ArticleService } from '../shared/services/article.service';
import { UpdateArticleEffect } from './store/effects/createArticle.effect';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { GetArticleEffect } from './store/effects/getArticle.effect';

const routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
];

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([GetArticleEffect, UpdateArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    LoadingModule,
  ],
  providers: [EditArticleService, ArticleService],
})
export class EditArticleModule {}
