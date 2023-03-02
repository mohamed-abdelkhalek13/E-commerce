import { Component } from '@angular/core';
import { CatService } from 'src/app/cat.service';
import {MatDialog} from '@angular/material/dialog';
import { CategoriesComponent } from '../categories/categories.component';
import { CatdialogComponent } from '../../dialogs/catdialog/catdialog.component';


@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent {

  cat:any=''
  constructor(public server:CatService,public dialog: MatDialog){




    this.server.getall().subscribe({
      next:(data)=>{this.cat=data},
      error:(error)=>{console.log(error)}

    })

  }

  open() {
    const dialogRef = this.dialog.open(CatdialogComponent, {
      width:'600px',

    });
  }

  delete1(id:any){
    confirm("are you sure to delete");
    if (true){
  this.server.deleteitem(id).subscribe()

    }

  }

}
