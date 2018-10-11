// index.component.ts

import { Component, OnInit } from '@angular/core';
import { AdUnit } from './AdUnit';
import { AdunitService } from '../../adunit.service';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  adunits: AdUnit[];
  deleteRes : any;

  constructor(
    private location : Location,
    private route: ActivatedRoute,
    private router: Router,
    private adunitservice: AdunitService) {}

  deleteAdUnit(id) {
    this.adunitservice.deleteAdUnit(id).subscribe(res => {
      this.deleteRes=res;
      if(res.toString()=="Successfully Removed")
      {
        alert(res.toString());
        location.reload(true);
      }
    });

    // alert("Successfully Removed. Please Refresh to Update");
  }

  ngOnInit() {
    this.adunitservice
      .getAdUnits()
      .subscribe((data: AdUnit[]) => {
      this.adunits = data;
    });
  }
}