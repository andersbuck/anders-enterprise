import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  constructor() { }

  getUser(): Observable<User> {
    this.user = {
      id: 1,
      name: 'David Byrne',
      username: 'user001',
      email: 'dByrne@gmail.com'
    };
    return of(this.user);
  }
}
