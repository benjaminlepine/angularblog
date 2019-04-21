import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/observable/interval';
import { Observable } from 'rxjs/Observable';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  secondes: number;
  // counterSubscription: Subscription;
  constructor(){}

  ngOnInit(){
    // const counter = Observable.interval(5000);
    // this.counterSubscription = counter.subscribe(
    //   (value:number)=>{
    //     this.secondes = value*5;
    //   }
    // )
  }

  ngOnDestroy(){
    // this.counterSubscription.unsubscribe()
  }
}
