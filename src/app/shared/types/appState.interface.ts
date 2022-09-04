import { AuthStateInteface } from 'src/app/auth/types/authState.interface';
import { FeedStateInterface } from '../modules/feed/types/feedState.interface';

export interface AppStateInterface {
  auth: AuthStateInteface;
  feed: FeedStateInterface;
}
