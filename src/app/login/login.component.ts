import { Component, OnInit } from '@angular/core';
import { FirebasesignupService } from '../firebasesignup.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSignedIn = false;
  constructor(private router:Router , public firebaseService:FirebasesignupService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!== null){
      this.isSignedIn= true;
     
    }
   
    else
    this.isSignedIn = false
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true;
    this.router.navigate(['/home/upload']);
  }

}
