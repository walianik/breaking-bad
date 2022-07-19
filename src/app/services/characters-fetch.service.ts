import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CharactersFetchService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("https://www.breakingbadapi.com/api/characters")
  }
}
