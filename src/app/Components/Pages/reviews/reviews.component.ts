import { Component } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewsService } from 'src/app/Services/reviews.service';

interface Country {
	product: string;
	name: string;
	rating: number;
	date: string;

}


const COUNTRIES: Country[] = [
	{
		product: 'HP',
		name: 'Ahmed',
		rating: 2,
		date: "22/2/2023",
	},
	{
		product: 'Laptop',
		name: 'mohamed',
		rating: 4,
		date: "11/1/2023",
	},
	{
		product: 'dell',
		name: 'hassan',
		rating: 5,
		date: "5/1/2023",
	},
	{
		product: 'dell',
		name: 'hassan',
		rating: 5,
		date: "5/1/2023",
	},

];

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
	countries = COUNTRIES;
  reviews:any

  constructor(config: NgbRatingConfig ,public server:ReviewsService) {

    this.server.getall().subscribe({
      next:(data)=>{this.reviews=data ,console.log(this.reviews)},
      error:(error)=>{console.log(error)}

    })
		config.max = 5;
		config.readonly = true;
	}

  delete1(id:any,mail:any){
    confirm("are you sure to delete");
    if (true){
  this.server.deleteitem(id,mail).subscribe()
  window.location.reload();

    }

  }
}
