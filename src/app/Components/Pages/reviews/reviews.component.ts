import { Component } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

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

];

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
	countries = COUNTRIES;

 
  constructor(config: NgbRatingConfig) {
		// customize default values of ratings used by this component tree
		config.max = 5;
		config.readonly = true;
	}
}
