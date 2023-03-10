import { Component,Injectable } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs'
export class Dashboard {
  name: string ="";
  Path:string ="";
  icon?:string="";
  children: Dashboard[]=[];
}

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css',"../../../../assets/css/styles.css"]
})
export class AdminDashBoardComponent {
  dataSource = new MatTreeNestedDataSource<Dashboard>;
  treeControl: NestedTreeControl<Dashboard>;
  dataChange: BehaviorSubject<Dashboard[]> = new BehaviorSubject<Dashboard[]>([]);
  constructor() {
    this.dataSource=new MatTreeNestedDataSource();
    this.treeControl = new NestedTreeControl<Dashboard,Dashboard>(this._getChildren);
    this.dataChange.subscribe(data => this.dataSource.data = data);

    this.dataChange.next([
      {
        name: 'Products',
        Path:"",
        icon:"inventory 2",
        children: [{name: 'Add Products',Path:"/Dashboard/AddProducts",children:[]}, {name: 'Product List',Path:"/Dashboard/productList",children:[]}, {name: 'Categories',Path:"/Dashboard/Categories",children:[]}],
      },
      {name: 'Orders',Path:"/Dashboard/Orders",icon:"shopping_cart",children:[]},
      {name:'Customers',Path:"/Dashboard/Customers",icon:"group",children:[]},
      {name:'Reviews',Path:"/Dashboard/reviews",icon:"reviews",children:[]},
      {name:'Settings',Path:"/Dashboard/EditUser",children:[]}
    ]);
  }
  private _getChildren = (node: Dashboard) => { return observableOf(node.children); };
  hasChild =  (_: number, nodeData: Dashboard) => {return !(nodeData.Path); }
  show="none";
  isShow=false;
  toggle(){
    this.isShow=!this.isShow; 
    if(this.isShow==true) this.show="block";
    else this.show="none" 
    console.log(this.show);   
    console.log(this.isShow);
  }
}
