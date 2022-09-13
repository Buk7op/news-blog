import { ArticleStateInterface } from 'src/app/article/types/articleState.interface';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { CreateArticleStateInterface } from 'src/app/create-article/types/createArticleState.interface';
import { EditArticleStateInterface } from 'src/app/edit-article/types/editArticleState.interface';
import { SettingStateInterface } from 'src/app/settings/types/settingState.interface';
import { FeedStateInterface } from '../modules/feed/types/feedState.interface';
import { PopularTagsStateInterface } from '../modules/popular-tags/types/popularTagsState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleStateInterface;
  createArticle: CreateArticleStateInterface;
  editArticle: EditArticleStateInterface;
  settings: SettingStateInterface;
}
