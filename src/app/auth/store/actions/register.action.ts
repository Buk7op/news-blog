import { createAction, props } from '@ngrx/store';
import { RegisterRequestInteface } from '../../types/registerRequest.inteface';
import { ActionTypes } from '../actionTypes';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<RegisterRequestInteface>()
);
