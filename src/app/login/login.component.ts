import { Component, OnInit } from '@angular/core';
import { FirebasesignupService } from '../firebasesignup.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { OauthenService } from '../shared/oauthen.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSignedIn = false;
  constructor(private oauthservice:OauthenService,private router:Router , public firebaseService:FirebasesignupService, private auth:AuthService) { 

  }

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
    this.router.navigate(['/home/gallery']);
    this.auth.setLoggedIn(true);
  }
  loginwithgoogle(){
    this.oauthservice.loginwithGoogle();
  }
  loginwithfb(){
    this.oauthservice.loginwithFb();
  }

}
