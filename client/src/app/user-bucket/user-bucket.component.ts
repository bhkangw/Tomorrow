import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // service
import { Router, ActivatedRoute } from '@angular/router'; // router
import { Bucket } from "../bucket" // class

@Component({
  selector: 'app-user-bucket',
  templateUrl: './user-bucket.component.html',
  styleUrls: ['./user-bucket.component.css']
})
export class UserBucketComponent implements OnInit {
  user: string;
  bucket;
  bucketId;
  buckets: Array<object> = [];

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) {
    // this._dataService.oneQuestionObserver.subscribe(question => {
    //   this.question = question;
    // })

    this._dataService.bucketObserver.subscribe((buckets) => {
      this.buckets = buckets;
    })

    // this._route.paramMap.subscribe(params => {
    //   this._dataService.getOneQuestion(params.get('id'));
    // })

    this.bucketId = _route.snapshot.params['name']
    console.log("bucket id!!!!", this.bucketId)
  }

  checkSess() {
    this._dataService.checkSess(res => {
      this.user = res;
      if (!this.user) {
        console.log("cant find")
        this._router.navigate(["/"]);
      }
    })
  }

  ngOnInit() {
    this.checkSess()
    this._dataService.showAll()
    console.log("&&&&&", this.buckets)
  }

}
