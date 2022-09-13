import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { FavoritesService } from './services/favorites.service';
import { EffectsModule } from '@ngrx/effects';
import { AddToFavoritedEffect } from './store/effects/addToFavorite.effect';

@NgModule({
  declarations: [FavoriteComponent],
  imports: [CommonModule, EffectsModule.forFeature([AddToFavoritedEffect])],
  exports: [FavoriteComponent],
  providers: [FavoritesService],
})
export class FavoriteModule {}
