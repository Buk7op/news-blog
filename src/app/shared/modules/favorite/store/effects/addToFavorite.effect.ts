import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { FavoritesService } from '../../services/favorites.service';
import {
  addToFavoritesAction,
  addToFavoritesFailureAction,
  addToFavoritesSuccessAction,
} from '../actions/addToFavorites.action';

@Injectable()
export class AddToFavoritedEffect {
  constructor(private actions$: Actions, private favoriteService: FavoritesService) {}

  addToFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoritesAction),
      switchMap(({ isFavorited, slug }) => {
        const article$ = isFavorited
          ? this.favoriteService.removeFromFavorites(slug)
          : this.favoriteService.addToFavorites(slug);
        return article$.pipe(
          map((article: ArticleInterface) => {
            return addToFavoritesSuccessAction({ article });
          }),
          catchError(() => {
            return of(addToFavoritesFailureAction);
          })
        );
      })
    )
  );
}
