import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { User } from './user.interface';
import { Router} from '@angular/router';
import { AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class OauthenService {

  constructor(private fireoauthen:AngularFireAuth,private router:Router,private auth:AuthService) {
    
    
   }
async loginwithGoogle(){
await this.fireoauthen.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
  res=>{
    alert("login has done successfully")
    this.router.navigate(['/home/gallery'])
    this.auth.setLoggedIn(true)
  }).catch(
    err=>{
      alert("Error occurs during login");
      console.log(err);
    })
}

async loginwithFb(){
  await this.fireoauthen.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
    res=>{
      alert("login has done successfully")
      this.router.navigate(['/home/gallery'])
      this.auth.setLoggedIn(true)
    }).catch(
      err=>{
        alert("Error occurs during login");
        console.log(err);
      })
  }
signOut(){
  firebase.auth().signOut().then(() => {
    this.router.navigate(['login']);
  //  alert("Sign-out successful.") ;
  }).catch((error) => {
    alert("error occurs during logout")
  });
}
 
  
}
