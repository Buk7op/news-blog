import { Action, createReducer, on } from '@ngrx/store';
import { AuthStateInteface } from '../types/authState.interface';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from './actions/getCurrentUser.action';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from './actions/login.action';
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
  isLoading: false,
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
  ),
  on(
    loginAction,
    (state): AuthStateInteface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInteface => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
      isLoggedIn: true,
    })
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInteface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(getCurrentUserAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getCurrentUserSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    currentUser: action.currentUser,
  })),
  on(getCurrentUserFailureAction, (state) => ({
    ...state,
    isLoading: false,
    isLoggedIn: false,
    currentUser: null,
  }))
);

export function reducer(state: AuthStateInteface, action: Action) {
  return authReducer(state, action);
}
