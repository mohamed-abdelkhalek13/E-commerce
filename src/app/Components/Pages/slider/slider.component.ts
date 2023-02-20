import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{
  i=0;
  index:number=0;
  images:string[]=[
    "/assets/img/lap1.jpg",
    "/assets/img/lap2.jpg",
    "/assets/img/lap3.jpg"
  ];
  imgPath:string=this.images[0];
  interval:any;
  ngOnInit(): void {
    this.interval=setInterval(()=>{
      console.log(this.index);  
      this.index=(this.i++)%this.images.length;
      this.imgPath=this.images[this.index]
    },1000)
  }
    next(){
      if(this.index<this.images.length-1){
        this.imgPath=this.images[this.index++];
      }
    }
    prev(){
      if(this.index>0){
        this.imgPath=this.images[this.index--];
      }
    }
    stop(){
      clearInterval(this.interval);
    }
    play(){
      this.interval=setInterval(()=>{
        console.log(this.index);  
        this.index=(this.i++)%this.images.length;
        this.imgPath=this.images[this.index]
      },1000)
    }
}
