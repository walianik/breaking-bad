import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'breaking-bad';
  login=false;
  seeMore=false;
  check(e:any){
    if(e==true){
      this.login=true
    }
    console.log(e);
  }

  see(e:any){
    console.log(e);
    if(e==true){
      this.seeMore=true
    }
  }
}
