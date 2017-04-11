import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { MdDialog } from "@angular/material";
import { Contact } from "../contact";
import { ContactDialogComponent } from "../contact-dialog/contact-dialog.component";
import { ContactListComponent } from "../contact-list/contact-list.component";
import {ContactService} from "../services/contact.service";
import {DialogService} from "app/contact/services/dialog.service";

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  contacts: Contact[];
  // noName: string;
  // gfirstName = this.contacts;
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;

  static subtitle: string;

  @Input() contact: [Contact];

  @Input() edit: EventEmitter<Contact>;
  @Input() remove: EventEmitter<Contact>;
  @Input() showOnMap: EventEmitter<Contact>;


  constructor(public dialog: MdDialog, public dialogService: DialogService, public contactService: ContactService) {
    this.edit = new EventEmitter<Contact>();
    this.remove = new EventEmitter<Contact>();
    this.showOnMap = new EventEmitter<Contact>();

    // this.noName = 'Alfred';
    // this.id = ContactService.id;
    this.id= Contact.length;
    // this.id = 1;

  }

  editContact(contact: Contact){
    // ContactListItemComponent.subtitle = 'Edit Contact';
    // this.dialog.open(ContactDialogComponent);
    //          this.contactService.editContact(contact);
    this.edit.emit(contact);
  }

  removeContact(contact: Contact){
    //          this.contactService.deleteContact(contact);
    this.remove.emit(contact);
  }

  showContact(contact: Contact){
    this.showOnMap.emit(contact);
  }

  ngOnInit() {
  }

}
