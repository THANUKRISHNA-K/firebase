import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms';
import { FirebasesignupService } from '../firebasesignup.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isSignedIn = false;
  enablebtn=true;
  constructor(private router:Router,public firebaseService:FirebasesignupService) { }

  
  ngOnInit(): void {
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true;
    alert("Account created successfully");
    this.enablebtn=false;
  }


}
