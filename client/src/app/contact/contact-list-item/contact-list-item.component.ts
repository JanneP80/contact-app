import {Component, EventEmitter, Input, OnInit,} from '@angular/core';
import { MdDialog } from "@angular/material";
import {Contact} from "../contact";
//import { ContactDialogComponent } from "../contact/contact-dialog/contact-dialog.component";

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  // contacts: Contact[];

  @Input() contact: [Contact];
  @Input() edit: EventEmitter<Contact>;
  @Input() remove: EventEmitter<Contact>;
  @Input() showOnMap: EventEmitter<Contact>;



  constructor(public dialog: MdDialog) {
    this.edit = new EventEmitter<Contact>();
    this.remove = new EventEmitter<Contact>();
    this.showOnMap = new EventEmitter<Contact>();

  }

  editContact(contact: Contact){
    //this.dialog.open(ContactDialogComponent);
    this.edit.emit(contact);
  }

  removeContact(contact: Contact){
    this.remove.emit(contact);
  }

  showContact(contact: Contact){
    this.showOnMap.emit(contact);
  }

  ngOnInit() {
  }

}
