import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  imageDetailedList: AngularFireList<any> | undefined;
  constructor(private firebase:AngularFireDatabase) { }

  getImageDetailList(){
    this.imageDetailedList= this.firebase.list('imageDetails');

  }

  insertimage(imageDetails:any){
    this.imageDetailedList?.push(imageDetails);


  }
}
