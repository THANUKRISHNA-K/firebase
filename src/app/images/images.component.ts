import { Component, OnInit } from '@angular/core';
import { SharedService} from '../shared.service';
import { ActivatedRoute,Router} from '@angular/router'
import { FirebasesignupService } from '../firebasesignup.service';
import { AuthService } from '../auth.service';
import { OauthenService } from '../shared/oauthen.service';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  constructor(private oauth:OauthenService,private auth:AuthService ,private service:SharedService, private route:ActivatedRoute, private router:Router, private firebaseService:FirebasesignupService) { }

  ngOnInit(): void {
  this.service.getImageDetailList();
  }
list(){
  this.router.navigate(['gallery'],{relativeTo:this.route});
}
upload(){
  this.router.navigate(['upload'],{relativeTo:this.route});
}
data(){
  this.router.navigate(['data'],{relativeTo:this.route});
}
logout(){
  // this.firebaseService.logout;
  this.oauth.signOut();

}

canDeactivate(){
  return new Promise((resolve, reject) => {

    resolve(confirm('Do you want to Logout?')),this.auth.setLoggedIn(false),
    alert("Loggedout Successfully");
  
    
  })
}

}
