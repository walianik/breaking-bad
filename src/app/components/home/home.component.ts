import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { CharactersFetchService } from 'src/app/services/characters-fetch.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  @Output() more=new EventEmitter<boolean>()
  characters!:any;
  selected:any[]=[]
  likeCount!:any
  constructor(private charServ:CharactersFetchService, private dataServ:DataServiceService) {
   }
  filterValue:string='';
  ngOnInit(): void {
    let data= localStorage.getItem('data');
    if(!data){ 
      console.log('if');
    this.charServ.getProducts().subscribe(data=>{
      this.characters=data
      console.log(this.characters);
      console.log(typeof data);
      localStorage.setItem('data',JSON.stringify(data))

    })
  }
  else{
    var data1 =JSON.parse(data)
    this.characters=data1
  }
    this.dataServ._subject.subscribe(element=>{
      this.filterValue=element
      
    })
  }
  seeMore(character:any){
    let see=true;
    this.more.emit(see)
    this.selected.push(character)
    this.dataServ._seeMore.next(this.selected)
  }
}
