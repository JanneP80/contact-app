import { Component, OnInit } from '@angular/core';
// import {ContactService} from "../services/contact.service";
// import {ContactListItemComponent} from "../contact-list-item/contact-list-item.component";
// import {ContactListComponent} from "../contact-list/contact-list.component";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {

  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;

  /*
  firstName,
  lastName,
  phone,
  address,
  city
  */

  subtitle='Add New Contact:';

  constructor() {
    /*
    this._contact = contact;
  }

  private _contact;
    //= ContactListComponent;

  get contact() {
    return this._contact;
  }

  set contact(value) {
    this._contact = value;

    */
  }

  // ContactListItemComponent._contact;

  addNewContact(firstName, lastName, phone, address, city){
    console.log(firstName);
  }

  ngOnInit() {
  }

}
