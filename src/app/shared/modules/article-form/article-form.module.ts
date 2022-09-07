import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleFormComponent } from './components/create-article/article-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackendErrorMessagesModule } from '../backendErrorModules/backendErrorMessages.module';

@NgModule({
  declarations: [ArticleFormComponent],
  imports: [CommonModule, ReactiveFormsModule, BackendErrorMessagesModule],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
