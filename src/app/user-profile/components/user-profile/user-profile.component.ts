import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { ProfileInterface } from 'src/app/shared/types/profile.interface';
import { getUserProfileAction } from '../../store/actions/getUserProfile.action';
import {
  errorSelector,
  isLoadingSelector,
  userProfileSelector,
} from '../../store/selectors';

@Component({
  selector: 'nb-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userProfile: ProfileInterface;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  userProfileSubscription: Subscription;
  slug: string;
  apiUrl: string;
  isCurrentUserProfile$: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe;
  }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(
        select(userProfileSelector),
        filter((profile): profile is ProfileInterface => profile !== null)
      )
      .subscribe((userProfile: ProfileInterface) => {
        this.userProfile = userProfile!;
      });

    this.route.params.subscribe((params: Params) => {
      this.slug = params.slug;
      this.fetchData();
    });
  }

  initializeValues() {
    this.slug = this.route.snapshot.paramMap.get('slug')!;
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isCurrentUserProfile$ = combineLatest([
      this.store.pipe(
        select(currentUserSelector),
        filter((currentUser): currentUser is CurrentUserInterface => currentUser !== null)
      ),
      this.store.pipe(
        select(userProfileSelector),
        filter((profile): profile is ProfileInterface => profile !== null)
      ),
    ]).pipe(
      map(([currentUser, userProfile]: [CurrentUserInterface, ProfileInterface]) => {
        return currentUser.username === userProfile.username;
      })
    );
  }

  fetchData() {
    this.store.dispatch(getUserProfileAction({ slug: this.slug }));
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites');
    return (this.apiUrl = isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`);
  }
}
