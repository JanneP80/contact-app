import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Contact } from '../contact';
// import { ContactDialogComponent } from "../contact-dialog/contact-dialog.component";
// import { ContactListComponent } from "../contact-list/contact-list.component";
import {ContactService} from '../services/contact.service';
import {DialogService} from 'app/contact/services/dialog.service';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {
/*
  contacts: Contact[];
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
*/
  id: number;
  // static subtitle: string;

  @Input() contact: [Contact];
  @Input() edit: EventEmitter<Contact>;
  @Input() remove: EventEmitter<Contact>;
  @Input() showOnMap: EventEmitter<Contact>;

  constructor(public dialog: MdDialog, public dialogService: DialogService, public contactService: ContactService) {
    this.edit = new EventEmitter<Contact>();
    this.remove = new EventEmitter<Contact>();
    this.showOnMap = new EventEmitter<Contact>();

    this.id = Contact.length;
  }

  editContact(contact: Contact) {
    this.edit.emit(contact);
  }

  removeContact(contact: Contact) {
    this.remove.emit(contact);
  }

  showContact(contact: Contact) {
    this.showOnMap.emit(contact);
  }

  ngOnInit() {
  }

}
