import { Observable } from 'rxjs';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, animation } from '@angular/animations';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0 , transform: 'translateY(-15px)'}),
          stagger('50ms',
          animate( '550ms ease-out',
          style({ opacity: 1, transform: 'translateY(-0px)'}))
        )
        ], { optional : true}),
        query(':leave', animate( '50ms',
          style({ opacity: 0})), { optional : true})
      ])
    ])
  ]
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
