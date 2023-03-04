import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  filteredArray:any[]=[];
  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute){}
  searchRoute = this.activatedRoute.snapshot.params["categoryName"];
  ngOnInit(){
    this.productsService.GetProductsFromDB().subscribe({
      next: (DBProducts:any ) => {
        let DataArray:any[] = DBProducts;
        let array:any[] = DataArray.map((p:any) => {
          let starsArray = new Array(Math.floor(p.avgRating)).fill('');
          let halfAStar = p.avgRating - Math.floor(p.avgRating);
          return {...p, ratingArray: starsArray, halfAStar:halfAStar}
        });
        this.productsService.SetProducts(array);
        if(this.searchRoute == "search"){
          this.filteredArray = this.productsService.GetProductsFromAKeyword();
          this.productsService.DBProducts$.next(this.filteredArray);
        }
        else if(this.searchRoute == "All"){
          this.productsService.SetProducts(array);
          this.getAll();
        }
        else{
          this.filteredArray = array.filter(p => p.category == this.activatedRoute.snapshot.params["categoryName"]);
          this.productsService.DBProducts$.next(this.filteredArray);
          this.productsService.SetProducts(array);
        }

      },
      error: (err) => {
        throw Error(err);
      }
    })
  }
  getAll(){
    this.filteredArray = this.productsService.getProducts();
    this.productsService.DBProducts$.next(this.filteredArray);
  }
  getHp(){
    let allProducts = this.productsService.getProducts();
    this.filteredArray = allProducts.filter(p => p.category == "Hp");
    this.productsService.DBProducts$.next(this.filteredArray);
    console.log(this.searchRoute)
  }
  getAsus(){
    let allProducts = this.productsService.getProducts();
    this.filteredArray = allProducts.filter(p => p.category == "Asus");
    this.productsService.DBProducts$.next(this.filteredArray);


  }
  getMsi(){
    let allProducts = this.productsService.getProducts();
    this.filteredArray = allProducts.filter(p => p.category == "Msi");
    this.productsService.DBProducts$.next(this.filteredArray);
  }
  getAcer(){
    let allProducts = this.productsService.getProducts();
    this.filteredArray = allProducts.filter(p => p.category == "Acer");
    this.productsService.DBProducts$.next(this.filteredArray);
  }
  getAlienware(){
    let allProducts = this.productsService.getProducts();
    this.filteredArray = allProducts.filter(p => p.category == "Alienware");
    this.productsService.DBProducts$.next(this.filteredArray);
  }
  getDell(){
    let allProducts = this.productsService.getProducts();
  this.filteredArray = allProducts.filter(p => p.category == "Dell");
    this.productsService.DBProducts$.next(this.filteredArray);
  }
  getLenovo(){
    let allProducts = this.productsService.getProducts();
    this.filteredArray = allProducts.filter(p => p.category == "Lenovo");
    this.productsService.DBProducts$.next(this.filteredArray);
  }
  under15(){
    let currentProducts = this.productsService.getProducts().filter(c => c.category == this.activatedRoute.snapshot.params["categoryName"]);
    if(currentProducts.length == 0 && this.searchRoute == "search"){
      let searchArray = this.productsService.GetProductsFromAKeyword();
      let newArray = searchArray.filter(p => p.price < 15000);
      this.filteredArray = newArray;
    }
    else if(currentProducts.length == 0 && this.searchRoute == "All"){
      currentProducts= this.productsService.getProducts().filter(p => p.price < 15000)
      this.filteredArray = currentProducts
    }
    else{
      let newArray = currentProducts.filter(p => p.price < 15000);
    this.filteredArray = newArray;
    }
    this.productsService.DBProducts$.next(this.filteredArray);
  }
  between15And25(){
    let currentProducts = this.productsService.getProducts().filter(c => c.category == this.activatedRoute.snapshot.params["categoryName"]);
    if(currentProducts.length == 0 && this.searchRoute == "search"){
      let searchArray = this.productsService.GetProductsFromAKeyword();
      let newArray = searchArray.filter(p => p.price >= 15000);
      let newArr = newArray.filter(p => p.price < 25000);
      this.filteredArray = newArr;
    }
    else if(currentProducts.length == 0 && this.searchRoute == "All"){
      currentProducts= this.productsService.getProducts().filter(p => p.price >= 15000)
      let newARR = currentProducts.filter(p => p.price < 25000);
      this.filteredArray = newARR
    }
    else{
      let newArray = currentProducts.filter(p => p.price >= 15000);
    let newARR = newArray.filter(p => p.price < 25000);
    this.filteredArray = newARR;
    }

    this.productsService.DBProducts$.next(this.filteredArray);
  }
  between25And35(){
    let currentProducts = this.productsService.getProducts().filter(c => c.category == this.activatedRoute.snapshot.params["categoryName"]);
    if(currentProducts.length == 0 && this.searchRoute == "search"){
      let searchArray = this.productsService.GetProductsFromAKeyword();
      let newArray = searchArray.filter(p => p.price >= 25000);
      let newArr = newArray.filter(p => p.price < 35000);
      this.filteredArray = newArr;
    }
    else if(currentProducts.length == 0 && this.searchRoute == "All"){
      currentProducts= this.productsService.getProducts().filter(p => p.price >= 25000)
      let newARR = currentProducts.filter(p => p.price < 35000);
      this.filteredArray = newARR
    }
    else{
      let newArray = currentProducts.filter(p => p.price >= 25000);
      let newArr = newArray.filter(p => p.price < 35000);
      this.filteredArray = newArr;
    }

    this.productsService.DBProducts$.next(this.filteredArray);
  }
  above35(){
    let currentProducts = this.productsService.getProducts().filter(c => c.category == this.activatedRoute.snapshot.params["categoryName"]);
    if(currentProducts.length == 0 && this.searchRoute == "search"){
      let searchArray = this.productsService.GetProductsFromAKeyword();
      let newArray = searchArray.filter(p => p.price > 35000);
      this.filteredArray = newArray;
    }
    else if(currentProducts.length == 0 && this.searchRoute == "All"){
      currentProducts= this.productsService.getProducts().filter(p => p.price > 35000)
      this.filteredArray = currentProducts
    }
    else{
      let newArray = currentProducts.filter(p => p.price > 35000);
      this.filteredArray = newArray;
    }

    this.productsService.DBProducts$.next(this.filteredArray);
  }

  stars4Up(){
    let currentProducts = this.productsService.getProducts().filter(c => c.category == this.activatedRoute.snapshot.params["categoryName"]);
    if(currentProducts.length == 0 && this.searchRoute == "search"){
      let searchArray = this.productsService.GetProductsFromAKeyword();
      let newArray = searchArray.filter(p => p.avgRating > 4);
      this.filteredArray = newArray;
    }
    else if(currentProducts.length == 0 && this.searchRoute == "All"){
      currentProducts= this.productsService.getProducts().filter(p => p.avgRating > 4)
      this.filteredArray = currentProducts
    }
    else{
      let newArray = currentProducts.filter(p => p.avgRating > 4);
      this.filteredArray = newArray;
    }

    this.productsService.DBProducts$.next(this.filteredArray);
  }
  stars3Up(){
    let currentProducts = this.productsService.getProducts().filter(c => c.category == this.activatedRoute.snapshot.params["categoryName"]);
    if(currentProducts.length == 0 && this.searchRoute == "search"){
      let searchArray = this.productsService.GetProductsFromAKeyword();
      let newArray = searchArray.filter(p => p.avgRating > 3);
      this.filteredArray = newArray;
    }
    else if(currentProducts.length == 0 && this.searchRoute == "All"){
      currentProducts= this.productsService.getProducts().filter(p => p.avgRating > 3)
      this.filteredArray = currentProducts
    }
    else{
      let newArray = currentProducts.filter(p => p.avgRating > 3);
      this.filteredArray = newArray;
    }

    this.productsService.DBProducts$.next(this.filteredArray);
  }
  stars2Up(){
    let currentProducts = this.productsService.getProducts().filter(c => c.category == this.activatedRoute.snapshot.params["categoryName"]);
    if(currentProducts.length == 0 && this.searchRoute == "search"){
      let searchArray = this.productsService.GetProductsFromAKeyword();
      let newArray = searchArray.filter(p => p.avgRating > 2);
      this.filteredArray = newArray;
    }
    else if(currentProducts.length == 0 && this.searchRoute == "All"){
      currentProducts= this.productsService.getProducts().filter(p => p.avgRating > 2)
      this.filteredArray = currentProducts
    }
    else{
      let newArray = currentProducts.filter(p => p.avgRating > 2);
      this.filteredArray = newArray;
    }

    this.productsService.DBProducts$.next(this.filteredArray);
  }
  stars1Up(){
    let currentProducts = this.productsService.getProducts().filter(c => c.category == this.activatedRoute.snapshot.params["categoryName"]);
    if(currentProducts.length == 0 && this.searchRoute == "search"){
      let searchArray = this.productsService.GetProductsFromAKeyword();
      let newArray = searchArray.filter(p => p.avgRating > 1);
      this.filteredArray = newArray;
    }
    else if(currentProducts.length == 0 && this.searchRoute == "All"){
      currentProducts= this.productsService.getProducts().filter(p => p.avgRating > 1)
      this.filteredArray = currentProducts
    }
    else{
      let newArray = currentProducts.filter(p => p.avgRating > 1);
      this.filteredArray = newArray;
    }

    this.productsService.DBProducts$.next(this.filteredArray);
  }
  removeOutOfStock(){
    let currentProducts = this.productsService.getProducts().filter(c => c.category == this.activatedRoute.snapshot.params["categoryName"]);
    if(currentProducts.length == 0 && this.searchRoute == "search"){
      let searchArray = this.productsService.GetProductsFromAKeyword();
      let newArray = searchArray.filter(p => p.stock != 0);
      this.filteredArray = newArray;
    }
    else if(currentProducts.length == 0){
      currentProducts= this.productsService.getProducts().filter(p => p.stock != 0)
      this.filteredArray = currentProducts
    }
    else{
      let newArray = currentProducts.filter(p => p.stock != 0);
      this.filteredArray = newArray;
    }

    this.productsService.DBProducts$.next(this.filteredArray);
  }
}
