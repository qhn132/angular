import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute) {
    this.activedRoute.queryParams.subscribe((params: Params) => {
      console.log(params);
    });
  }

  ngOnInit(): void {
  }

}
