import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";
// import {Error} from "tslint/lib/error";
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent implements OnInit {

  constructor(private router: Router, public dialog: MdDialogRef<AuthDialogComponent>) {

  }

  ngOnInit() {

  }

  out() {
    this.router.navigate(['/login']);
  }
}
