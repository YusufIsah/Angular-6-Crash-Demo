
import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  u$: Object;

  constructor(private data: DataService, private route: ActivatedRoute ) {
    this.route.params.subscribe( params => this.u$ = params.id);
   }

  ngOnInit() {
    this.data.getUser(this.u$).subscribe(
      data => this.u$ = data
    );

  }

}
