import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // service
import { Router } from '@angular/router'; // router
import { Bucket } from "../bucket" // class

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: string;
  bucket: Bucket = new Bucket();
  buckets: Array<object> = [];
  status = "http://www.radioparadise.com/scripts/tiny_mce/plugins/emotions/img/icon_sad.gif"

  constructor(private _dataService: DataService, private _router: Router) {
    this._dataService.bucketObserver.subscribe((buckets) => {
      this.buckets = buckets;
    })
  }
  
  checkSess(){
    this._dataService.checkSess((res) => {
      this.user = res;
      if(!this.user){
        console.log("cant find")
        this._router.navigate(["/"]);
      }
    })
  }

  addBucket(question) {
    this.bucket.name = this.user;
    console.log("What", this.bucket)
    this._dataService.addBucket(this.bucket, res => {
      console.log("bucket back in comp")
      this._router.navigate(["/dashboard"]);
    })
  }

  // showAll(){
  //   this._dataService.showAll(res => {
  //     console.log("showing all back in comp")
  //     // this._router.navigate(["/dashboard"]);
  //   })
  // }

  changeStatus(id){
    console.log("changing status on", id)
    this.status = "http://www.radioparadise.com/scripts/tiny_mce/plugins/emotions/img/icon_cool.gif"
    this._dataService.changeStatus(id, res => {
      console.log("changed status on", id)
      this.status = "http://www.radioparadise.com/scripts/tiny_mce/plugins/emotions/img/icon_cool.gif"
      console.log("changed status", this.status)
      return this.status;
    })
  }

  ngOnInit() {
    this.checkSess()
    this._dataService.showAll()
    console.log("&statussss&&&&",this.status)
  }

}
