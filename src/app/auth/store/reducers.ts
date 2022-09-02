import { Action, createReducer, on } from '@ngrx/store';
import { AuthStateInteface } from '../types/authState.interface';
import { registerAction } from './actions/register.action';

const initialState: AuthStateInteface = {
  isSubmitting: false,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInteface => ({
      ...state,
      isSubmitting: true,
    })
  )
);

export function reducer(state: AuthStateInteface, action: Action) {
  return authReducer(state, action);
}
