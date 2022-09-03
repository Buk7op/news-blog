import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateInteface } from '../types/authState.interface';

export const authFeatureSelector = createFeatureSelector<AuthStateInteface>('auth');

export const isSubmittedSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInteface) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInteface) => authState.validationErrors
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInteface) => authState.isLoggedIn
);

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInteface) => authState.isLoggedIn === false
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInteface) => authState.currentUser
);
