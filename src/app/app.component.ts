import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AngularFireStorage} from '@angular/fire/storage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filePath:String | undefined;
  filedata=""
  p:number=1;
  lst={
    names:"",
    id:"",
    phone:"",
    email:"",
    dept:"",
    college:"",
    locality:"",
  }
  data:any;
  title = 'firebaseinteg';
  constructor(private auth:AngularFireDatabase,private afStorage: AngularFireStorage){
    const items:AngularFireList<any>=auth.list('userlist');
    items.snapshotChanges().subscribe(data=>{
      let a:any=[];
      data.forEach(v=>{let b:any={key:v.key, data:v.payload.val()};
      a.push({key:b.key, ...b.data})
    });
   
    this.data=a;
    });
  }
  upload(event:any) {    
    this.filePath = event.target.files[0]
  }
  uploadImage(){
    if(this.filedata==""){
      alert("please upload file")
    }
    else{
      console.log(this.filePath)
      alert("image uploaded successfully")
      this.afStorage.upload('/images'+Math.random( )+this.filePath,  this.filePath, );
    }
      
  }

  add()
  {
    this.auth.list("userlist").push(this.lst);
  }
  remov(i:any)
  {
    console.log({ i });
    this.auth.object(`userlist/${i}`).remove();
  }


}
