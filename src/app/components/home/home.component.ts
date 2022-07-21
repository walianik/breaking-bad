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
  likeKrega:any=false
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
    for(let i=0;i<this.characters.length;i++){
      this.characters[i].likeBy=0
    }    
    console.log(this.characters);
    
  }
  seeMore(character:any){
    let see=true;
    this.more.emit(see)
    this.selected.push(character)
    this.dataServ._seeMore.next(this.selected)
  }
  like(i:any){
    // console.log('hii');
    this.likeKrega=!this.likeKrega
    console.log(this.likeKrega);
    
    if(this.likeKrega==true){
    let array=document.getElementsByClassName(i)
    array[0].classList.add('fa-heart-add')
    this.characters[i].likeBy++
    }
    else{
      let array=document.getElementsByClassName(i)
      array[0].classList.remove('fa-heart-add')
      this.characters[i].likeBy--
    }
    console.log(this.characters[i]);
    // this.characters[i].likeBy++   
  }
}
