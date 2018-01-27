import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // service
import { Router } from '@angular/router'; // router
import { Bucket } from "../bucket" // class

@Component({
  selector: 'app-buckets',
  templateUrl: './buckets.component.html',
  styleUrls: ['./buckets.component.css']
})
export class BucketsComponent implements OnInit {
  user: string;
  bucket: Bucket = new Bucket();
  buckets: Array<object> = [];

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
    this._dataService.showAll()
    console.log(this.buckets)
  }

}
