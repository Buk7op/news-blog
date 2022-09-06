import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getArticleAction } from 'src/app/article/store/actions/getArticle.action';
import { ActivatedRoute } from '@angular/router';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { Subscription, pipe, Observable, combineLatest } from 'rxjs';
import {
  dataSelector,
  isLoadingSelector,
  errorSelector,
} from 'src/app/article/store/selectors';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { map } from 'rxjs/operators';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug: string;
  article: ArticleInterface | null;
  articleSubscription: Subscription;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  isAuthor$: Observable<boolean>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')!;
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isAuthor$ = combineLatest([
      this.store.pipe(select(dataSelector)),
      this.store.pipe(select(currentUserSelector)),
    ]).pipe(
      map(
        ([article, currentUser]: [
          ArticleInterface | null,
          CurrentUserInterface | null
        ]) => {
          if (!article || !currentUser) {
            return false;
          }
          return currentUser.username === article.author.username;
        }
      )
    );
  }

  initializeListeners(): void {
    this.articleSubscription = this.store
      .pipe(select(dataSelector))
      .subscribe((article: ArticleInterface | null) => {
        this.article = article;
      });
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }
}
