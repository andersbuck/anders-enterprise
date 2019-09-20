import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User = {
    id: 1,
    name: 'David Byrne',
    username: 'user001',
    email: 'dByrne@gmail.com'
  };

  constructor() { }

  ngOnInit() {
  }

}
