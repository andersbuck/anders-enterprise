import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = {} as User;
  private userUrl = 'http://localhost:8080/web-app/user';
  private errorUrl = 'http://localhost:8080/web-app/causeerror';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl);
  }

  getError(): Observable<any> {
    return this.http.get<any>(this.errorUrl);
  }
}

