import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateInteface } from '../types/authState.interface';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInteface>('auth');

export const isSubmittedSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInteface) => authState.isSubmitting
);
