import { Observable } from 'rxjs';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersOnline$: Object;
  usersLocal$: Object;


  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsersOnline().subscribe(
      data => this.usersOnline$ = data
    );
    this.data.getUsersLocal().subscribe(
      data => this.usersLocal$ = data
    );
  }

}
