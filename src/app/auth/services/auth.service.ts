import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { RegisterRequestInteface } from '../types/registerRequest.inteface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponseInterface } from '../types/authResponse.interface';
import { LoginRequestInteface } from '../types/loginRequest.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }

  register(data: RegisterRequestInteface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';
    return this.http.post<AuthResponseInterface>(url, data).pipe(map(this.getUser));
  }

  login(data: LoginRequestInteface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login';
    return this.http.post<AuthResponseInterface>(url, data).pipe(map(this.getUser));
  }
}
