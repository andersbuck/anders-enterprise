import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser().subscribe((user: User) => this.user = user);
  }

}
