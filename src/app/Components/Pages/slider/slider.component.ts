import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

import { NgIf } from '@angular/common';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  images:string[]=[
    "https://www.kivodaily.com/wp-content/uploads/2023/01/Travel-Laptops.png",
    "https://as2.ftcdn.net/v2/jpg/03/78/64/69/1000_F_378646947_vt9LnOVkcmwBz8UsnnMcbmCWIYfTwpVi.jpg",
    "https://as1.ftcdn.net/v2/jpg/03/50/28/06/1000_F_350280688_m5VvahIlxOvLkcAnZBnbDf2YI81Tp9tR.jpg",

  ];
}
