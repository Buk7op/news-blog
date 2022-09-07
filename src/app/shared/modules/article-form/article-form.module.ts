import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleFormComponent } from './components/create-article/article-form.component';

@NgModule({
  declarations: [ArticleFormComponent],
  imports: [CommonModule],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
