import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  p:number=1;
  lst={
    names:"",
    id:"",
    phone:"",
    email:"",
    dept:"",
    college:"",
    locality:""
  }
  data:any;
  title = 'firebaseinteg';
  constructor(private auth:AngularFireDatabase){
    const items:AngularFireList<any>=auth.list('userlist');
    items.valueChanges().subscribe(data=>this.data=data);
  }
  add(){
    this.auth.list("userlist").push(this.lst);
  }
  remov(i:any){
  let rem=this.auth.list("userlist");
  rem.remove(i);
  }
}
