import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SettingStateInterface } from '../types/settingState.interface';

export const settingsFeatureSelector =
  createFeatureSelector<SettingStateInterface>('settings');

export const isSubmittedSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingStateInterface) => settingsState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingStateInterface) => settingsState.validationErrors
);
