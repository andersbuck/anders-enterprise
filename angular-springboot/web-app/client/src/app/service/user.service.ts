import { Injectable, Inject } from '@angular/core';
import { User } from '../model/User';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = <User>{};
  private userUrl = 'http://localhost:8080/web-app/user';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl).pipe(
      catchError(this.handleError<User>('getUser', <User>{}))
    );;
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error('Hey this is my error!' + error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
