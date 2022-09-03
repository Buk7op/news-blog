import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackendErrorInterface } from 'src/app/shared/types/backendErrors.interface';
import { loginAction } from '../../store/actions/login.action';
import { isSubmittedSelector, validationErrorsSelector } from '../../store/selectors';
import { LoginRequestInteface } from '../../types/loginRequest.interface';

@Component({
  selector: 'nb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$!: Observable<BackendErrorInterface | null>;
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittedSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: '',
      password: '',
    });
  }

  onSubmit() {
    console.log(this.form.value);
    const request: LoginRequestInteface = {
      user: this.form.value,
    };
    this.store.dispatch(loginAction({ request }));
  }
}
