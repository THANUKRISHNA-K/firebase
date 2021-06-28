import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
imageList:any=[];
rowindex:any=[];
  constructor( private imgservice:SharedService) { }

  ngOnInit(): void {
    this.imgservice.imageDetailedList?.snapshotChanges().subscribe(
      list => {
       this.imageList= list.map(item=> {return item.payload.val()});
       this.rowindex= Array.from(Array(Math.ceil(this.imageList.length+1/4)).keys())
      }
    )
  }

}
