import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent {
  reviews:any[]=[];
  currentUserEmail:any = {};
  editedProduct:any = {
    review:'',
    rating: null,
    customerEmail: '',
    product_Id:null
  }
  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute, private router:Router){}

  ngOnInit(){
    this.productService.GetProductReviewsFromDB().subscribe({
      next: (rev:any) => {
        let revArray:any[] = rev;
        let filteredArray = revArray.filter(r => r.product_Id == this.activatedRoute.snapshot.params["productID"]);

        let adjustedArray = filteredArray.map((p:any) => {
          let starsArray = new Array(Math.floor(p.rating)).fill('');
          let halfAStar = p.rating - Math.floor(p.rating);
          return {...p, ratingArray: starsArray, halfAStar:halfAStar}
        });
        this.reviews = adjustedArray;
        this.currentUserEmail = localStorage.getItem('email')?.replace(/"/g , '').trim();
      },
      error: (error) => {
        throw Error(error);
      }
    })
  }
  submitReview(extractedData:any){
    let reviewData = {
      ...extractedData,
      customerEmail: this.currentUserEmail,
      product_Id: +this.activatedRoute.snapshot.params["productID"]
    }
    this.productService.AddCurrentCustomerReview(reviewData)

  }
  editReview(){
    let targetProduct = this.productService.GetReviewsByProductIdAndEmail(this.activatedRoute.snapshot.params["productID"], this.currentUserEmail)
    this.editedProduct = targetProduct;
  }
  submitEditedReview(extractedData:any){
    let reviewData = {
      ...extractedData,
      customerEmail: this.currentUserEmail,
      product_Id: +this.activatedRoute.snapshot.params["productID"]
    }
    this.productService.UpdateCurrentCustomerReview(this.activatedRoute.snapshot.params["productID"],reviewData)
  }
  removeReview(){
    this.productService.RemoveCurrentCustomerReview(this.activatedRoute.snapshot.params["productID"], this.currentUserEmail )
  }
}
