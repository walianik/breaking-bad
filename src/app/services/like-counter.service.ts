import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeCounterService {

  counter!:any
  constructor() { }
  showCounter(){
    this.counter=this.counter
  }
  updateCounter(){
    this.counter=this.counter+1
  }
}
