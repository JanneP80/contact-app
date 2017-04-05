import { Component, OnInit } from '@angular/core';
import {ContactService} from "../services/contact.service";
import {ContactListItemComponent} from "../contact-list-item/contact-list-item.component";
import {ContactListComponent} from "../contact-list/contact-list.component";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {

  private _contact;
    //= ContactListComponent;

  get contact() {
    return this._contact;
  }

  set contact(value) {
    this._contact = value;
  }

  // ContactListItemComponent._contact;


  constructor() { }

  ngOnInit() {
  }

}
