import { Action, createReducer, on } from '@ngrx/store';
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from 'src/app/auth/store/actions/updateCurrentUser.action';
import { SettingStateInterface } from '../types/settingState.interface';

const initialState: SettingStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const settingsReducer = createReducer(
  initialState,
  on(
    updateCurrentUserAction,
    (state): SettingStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateCurrentUserSuccessAction,
    (state): SettingStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateCurrentUserFailureAction,
    (state, action): SettingStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: SettingStateInterface, action: Action) {
  return settingsReducer(state, action);
}
