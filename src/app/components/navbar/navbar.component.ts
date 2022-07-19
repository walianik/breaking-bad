import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(private dataServ:DataServiceService) {

     }

  FilterValue:any=''
  ngOnInit(): void {
    // this.dataServ.emit(this.FilterValue)
  }
  passData(){
    this.dataServ.emit(this.FilterValue)
  }
}
