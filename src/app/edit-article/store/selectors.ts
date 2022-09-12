import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EditArticleStateInterface } from '../types/editArticleState.interface';

export const editArticleFeatureSelector =
  createFeatureSelector<EditArticleStateInterface>('editArticle');

export const isSubmittedSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.validationErrors
);

export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.isLoading
);

export const articleSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.article
);
