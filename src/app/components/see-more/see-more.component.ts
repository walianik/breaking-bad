import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.sass']
})
export class SeeMoreComponent implements OnInit {

  character!:any
  constructor(private dataServ:DataServiceService) {
    
   }

  ngOnInit(): void {
    this.dataServ._seeMore.subscribe((data)=>{
      // console.log(data);
      this.character=data

    })
  }

}
