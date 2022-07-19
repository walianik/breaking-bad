import { Component, Input,Output,EventEmitter } from '@angular/core';
import { FormControl,Validators,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  @Output() event=new EventEmitter<boolean>()
  email=new FormControl("",[
    Validators.required,
    Validators.email 
  ])
  password=new FormControl("",[
    Validators.required,
    Validators.minLength(8),
    Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")
  ])
  loginForm:any=new FormGroup({
    email:this.email,
    password:this.password
  })
  
  Login(){
    console.log(this.loginForm.value);
    let check=true
    this.event.emit(check)  
    localStorage.setItem('login',JSON.stringify(check))
  }
}
