import { Action, createReducer, on } from '@ngrx/store';
import { AuthStateInteface } from '../types/authState.interface';
import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from './actions/register.action';

const initialState: AuthStateInteface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInteface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInteface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInteface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducer(state: AuthStateInteface, action: Action) {
  return authReducer(state, action);
}
