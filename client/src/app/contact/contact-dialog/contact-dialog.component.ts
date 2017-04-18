import { Component, OnInit } from '@angular/core';
import { ContactService } from "../services/contact.service";
import {Contact} from "../contact";
//import {ContactListItemComponent} from "../contact-list-item/contact-list-item.component";
// import {ContactListItemComponent} from "../contact-list-item/contact-list-item.component";
// import {ContactListComponent} from "../contact-list/contact-list.component";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {

/*
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
*/
  /*
  firstName,
  lastName,
  phone,
  address,
  city
  */

  //subtitle='Add New Contact:';
  id: number = 4;
  contact:Contact;
  // subtitle:subtitle;
  public subtitle: string ='Add New Contact:';

  constructor(private contactService: ContactService) {
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

  addNewContact(firstName?, lastName?, phone?, address?, city?){
    console.log(firstName);

    // this.subtitle = ContactListItemComponent.subtitle;
    //this.contactService.addNewContact2(this.id,firstName, lastName, phone, address, city);
    this.id++;
  }
/*
  editContact(firstName?, lastName?, phone?, address?, city?){
    console.log(firstName);

    this.subtitle = ContactListItemComponent.subtitle;
    this.contactService.editContact(ContactDialogComponent.id,firstName, lastName, phone, address, city);
    ContactDialogComponent.id++;
  }
*/

  ngOnInit() {
  }

}
