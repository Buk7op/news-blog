import { BackendErrorInterface } from 'src/app/shared/types/backendErrors.interface';

export interface SettingStateInterface {
  isSubmitting: Boolean;
  validationErrors: BackendErrorInterface | null;
}
