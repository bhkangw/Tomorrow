import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { ActivatedRoute, Router } from '@angular/router';
import "rxjs";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  user: string;
  buckets: Array<object> = [];
  bucketObserver = new BehaviorSubject(this.buckets)
  object;
  status = "http://www.radioparadise.com/scripts/tiny_mce/plugins/emotions/img/icon_sad.gif"

  constructor(private _router: Router, private _http: Http, private _route: ActivatedRoute) { }

  login(user, cb){
    console.log("passing through service")
    this._http.post("/login", user).subscribe(res => {
      this.user = res.json();
      console.log("yoooo",this.user)
      cb(res.json())
    })
  }

  checkSess(cb){
    this._http.get("/sess").subscribe((res) => {
      console.log("session in service");
      cb(res.json());
    })
  }

  addBucket(bucket, cb) {
    this._http.post("/addBucket", bucket).subscribe(res => {
      this.buckets = res.json();
      this.bucketObserver.next(this.buckets);
      console.log("buckettttttt", bucket)
      console.log("bucketssssss!!!!", this.buckets)
      this._router.navigate(['dashboard']);
    })
  }

  showAll() {
    this._http.get("/showAll").subscribe(res => {
      this.buckets = res.json();
      console.log("bucketssssss!!@@@!!", this.buckets)
      this.bucketObserver.next(this.buckets);
      console.log("bucketssssss!!@@####@!!", this.buckets)
      return res.json();
    })
  }

  changeStatus(id, cb){
    console.log("changingggg status on", id)
    this.object = {"id": id}
    console.log("changingggg status on", this.object)
    this.status = "http://www.radioparadise.com/scripts/tiny_mce/plugins/emotions/img/icon_cool.gif"
    this._http.post("/changeStatus", this.object).subscribe(res => {
      console.log("status changing through service")
      this.status = "http://www.radioparadise.com/scripts/tiny_mce/plugins/emotions/img/icon_cool.gif"
      console.log("statussss emoji", this.status)
    })
  }

}
