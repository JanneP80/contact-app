import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {Error} from "tslint/lib/error";

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent implements OnInit {

  // error: Error;
  // error: error.status;

  constructor(public dialog: MdDialogRef<AuthDialogComponent>) {

  }

  ngOnInit() {
    // if (!this.error) {
    //  this.error = new Error;
  //  }
  }

 // okDismiss() {
    //
    // this.dialog.close(this.user);
    // this.dialog.close();
 // }

}
