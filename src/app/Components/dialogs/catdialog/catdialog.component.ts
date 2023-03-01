import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CatService } from 'src/app/cat.service';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-catdialog',
  templateUrl: './catdialog.component.html',
  styleUrls: ['./catdialog.component.css']
})
export class CatdialogComponent {


  constructor(@Inject(MAT_DIALOG_DATA) public data: any , public server:CatService ,public router:Router,private dialogRef: MatDialogRef<CatdialogComponent> ) {


  }

  addform = new FormGroup({
    name:new FormControl("",[Validators.required]),
    description:new FormControl("",[Validators.required ]),
    image: new FormControl(""),
    id:new FormControl(3432432),
    products:new FormControl(["l"])



  })

  newitem1( ){
    var newitem = this.addform.value
    console.log(newitem)
    this.server.additem(newitem).subscribe()
    this.dialogRef.close();
      window.location.reload();
  }

}
  // newitem1(name:any , description:any , image:any){
  //   var newitem = this.addform.value
  //   console.log(newitem)
  //   this.server.additem(newitem).subscribe()
  //   // this.dialogRef.close();
  //   //   window.location.reload();
  // }


