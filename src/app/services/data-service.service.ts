import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  public _subject=new BehaviorSubject<any>('');
  public _seeMore=new BehaviorSubject<any>('')
  emit<T>(data:T){
    this._subject.next(data)
  }
  on<T>():Observable<T>{
    return this._subject.asObservable();
  }
}
