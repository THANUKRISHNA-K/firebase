import { Component, OnInit } from '@angular/core';
import { AngularFireStorage} from '@angular/fire/storage';
import { finalize} from 'rxjs/operators';
import { FormGroup,FormControl } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
imgSrc:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCfzpO33yb1wYmJpoGk9VrxKnvPh0AZGL4X_suewBxWsutd0VEvM1LkaRkb0JI271MZNc&usqp=CAU";
selectedImage:any=null;
  constructor(private afstore:AngularFireStorage, private imgservice:SharedService) { }

formtemp = new FormGroup({
  imageUrl: new FormControl('')
})

  ngOnInit(): void {
    this.resetform();
  }

  showpreview(event:any){
    if(event.target.files && event.target.files[0] ){
      const reader = new FileReader();
      reader.onload=(e:any)=> this.imgSrc=e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage=event.target.files[0]

    } 
    else{
      this.imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCfzpO33yb1wYmJpoGk9VrxKnvPh0AZGL4X_suewBxWsutd0VEvM1LkaRkb0JI271MZNc&usqp=CAU";
      this.selectedImage=null;
    }
  }

  upload(formValue: any){
    alert("image is uploading")
    var filepath=`images/${this.selectedImage.name}_${new Date().getTime()}`;
    const fileRef= this.afstore.ref(filepath)
    this.afstore.upload(filepath,this.selectedImage).snapshotChanges().pipe(
      finalize(()=>{
        fileRef.getDownloadURL().subscribe((url)=>{
          formValue['imageUrl']=url;
           this.resetform();
           this.imgservice.insertimage(formValue);
           alert("image is uploaded successfully");
        })
      })
    ).subscribe();
    
  }

  resetform(){
    this.formtemp.reset();
    this.formtemp.setValue({
      imageUrl:""
    });
    this.imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCfzpO33yb1wYmJpoGk9VrxKnvPh0AZGL4X_suewBxWsutd0VEvM1LkaRkb0JI271MZNc&usqp=CAU";
    this.selectedImage=null;
  }
}
