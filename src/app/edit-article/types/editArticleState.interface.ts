import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { BackendErrorInterface } from 'src/app/shared/types/backendErrors.interface';

export interface EditArticleStateInterface {
  isLoading: boolean;
  article: ArticleInterface | null;
  isSubmitting: boolean;
  validationErrors: BackendErrorInterface | null;
}
