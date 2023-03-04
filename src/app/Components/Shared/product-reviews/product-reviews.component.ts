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
  currentUserEmail:any = "";
  editedProduct:any = {
    review:'',
    rating: null,
    customerEmail: '',
    product_Id:null
  }

  showSubmit = true;
  showCurrentCustomerReviewForm = true
  showEditButton = true;

  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute, private router:Router){
  }

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
        this.productService.DBProductReviews$.next(adjustedArray);
        this.currentUserEmail = localStorage.getItem('email')?.replace(/"/g , '').trim();

      },
      error: (error) => {
        throw Error(error);
      }
    })
    this.productService.DBProductReviews$.subscribe({
      next: (data:any) => {
        let array:any[] = data
        this.reviews = array;
        console.log(array)
        if(array.find((revs:any) => revs.customerEmail == this.currentUserEmail)){
          this.showCurrentCustomerReviewForm = false;
        }
      }
    })
  }
  resetForm(){
    this.editedProduct = {
      review:'',
      rating: null,
      customerEmail: '',
      product_Id:null
    }
  }
  submitReview(rating:any, review:any){
    let userReview = this.reviews.find((revs:any) => revs.customerEmail == this.currentUserEmail)
    if(localStorage.getItem("email") == null){
      this.router.navigate(["/login"])
    }
    else{
      if(userReview || rating<0 || rating>5 || review ==""){
        return;
      }
      else{

        let reviewData = {
          rating: rating,
          review:review,
          customerEmail: this.currentUserEmail,
          product_Id: +this.activatedRoute.snapshot.params["productID"]
        }
        let starsArray = new Array(Math.floor(rating)).fill('');
        let halfAStar = rating - Math.floor(rating);
        let adjustedObj ={...reviewData, ratingArray: starsArray, halfAStar:halfAStar}
        this.productService.AddCurrentCustomerReview(reviewData)
        this.productService.DBProductReviews$.next([adjustedObj, ...this.reviews])
            this.productService.SetReviews(this.reviews)
        this.resetForm()
      }
    }
  }
  editReview(){
    this.showSubmit = false;
    this.showCurrentCustomerReviewForm = true;
    this.showEditButton = false;
    let targetProduct = this.reviews.find((rev:any) => rev.product_Id == this.activatedRoute.snapshot.params["productID"] && rev.customerEmail == this.currentUserEmail)
    this.editedProduct = targetProduct;
  }
  submitEditedReview(rating:any, review:any){
    this.showEditButton = true;
    let reviewData = {
      rating: rating,
      review:review,
      customerEmail: this.currentUserEmail,
      product_Id: +this.activatedRoute.snapshot.params["productID"]
    }
    let starsArray = new Array(Math.floor(rating)).fill('');
    let halfAStar = rating - Math.floor(rating);
    let adjustedObj ={...reviewData, ratingArray: starsArray, halfAStar:halfAStar}
    this.productService.UpdateCurrentCustomerReview(this.activatedRoute.snapshot.params["productID"], reviewData)
    let array:any[] = this.reviews;
    let oldReviewIndex = array.findIndex((revs:any) => revs.customerEmail == this.currentUserEmail)
    array[oldReviewIndex] = adjustedObj;
    this.productService.DBProductReviews$.next([...array])
    this.resetForm()
  }
  removeReview(){
    this.showEditButton = true
    this.showSubmit = true;
    this.showCurrentCustomerReviewForm = true;
    this.productService.RemoveCurrentCustomerReview(this.activatedRoute.snapshot.params["productID"], this.currentUserEmail )
    let array:any[] =this.reviews;
    console.log(array)
    let newArray = array.filter((revs:any) => revs.customerEmail != this.currentUserEmail)
    this.productService.DBProductReviews$.next(newArray)
    this.resetForm()
  }
}
