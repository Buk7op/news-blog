import { ArticleStateInterface } from 'src/app/article/types/articleState.interface';
import { AuthStateInteface } from 'src/app/auth/types/authState.interface';
import { CreateArticleStateInterface } from 'src/app/create-article/types/createArticleState.interface';
import { EditArticleStateInterface } from 'src/app/edit-article/types/editArticleState.interface';
import { FeedStateInterface } from '../modules/feed/types/feedState.interface';
import { PopularTagsStateInterface } from '../modules/popular-tags/types/popularTagsState.interface';

export interface AppStateInterface {
  auth: AuthStateInteface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleStateInterface;
  createArticle: CreateArticleStateInterface;
  editArticle: EditArticleStateInterface;
}
