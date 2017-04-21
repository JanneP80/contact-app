import { Component, OnInit } from '@angular/core';
// import { ContactService } from "../services/contact.service";
import { Contact } from '../contact';
import { MdDialogRef } from '@angular/material';
// import { DialogService } from "../services/dialog.service";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {
  // subtitle='Add New Contact:';

  contact: Contact;
  subtitle: string;
  // public subtitle: string = 'Add New Contact:';

  constructor(public dialog: MdDialogRef<ContactDialogComponent>) {
  }

  addNewContact() {
    // this.subtitle = ContactListItemComponent.subtitle;
    // this.contactService.addNewContact2(this.id,firstName, lastName, phone, address, city);
    this.dialog.close(this.contact);
  }

  ngOnInit() {
    if (!this.contact) {
      this.contact = new Contact();
    }
  }
}
