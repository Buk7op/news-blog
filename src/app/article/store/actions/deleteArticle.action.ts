import { createAction, props } from '@ngrx/store';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { ActionTypes } from '../actionTypes';

export const deleteArticleAction = createAction(
  ActionTypes.DELETE_ARTICLE,
  props<{ slug: string }>()
);
export const deleteArticleSuccessAction = createAction(
  ActionTypes.DELETE_ARTICLE_SUCCESS
);
export const deleteArticleFailureAction = createAction(
  ActionTypes.DELETE_ARTICLE_FAILURE
);
