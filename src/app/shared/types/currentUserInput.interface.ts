import { CurrentUserInterface } from './currentUser.interface';

export interface CurrentUserInputInterface {
  user: CurrentUserInterface & { password: string };
}
