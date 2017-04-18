import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Contact } from "../contact";
// import {MdDialog} from '@angular/material';
// import {ContactDialog} from '../contact-dialog/contact-dialog.component'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input()  contacts: [Contact];
  // @Output() select: EventEmitter<Contact>;
  @Output()  editContact: EventEmitter<Contact>;
  @Output()  removeContact: EventEmitter<Contact>;
  @Output()  showContactOnMap: EventEmitter<Contact>;

  constructor() {
    // this.select = new EventEmitter();
    this.editContact = new EventEmitter();
    this.removeContact = new EventEmitter();
    this.showContactOnMap = new EventEmitter();
  }

  ngOnInit() {
  }
/*
  contactSelected(contact: Contact){
    this.select.emit(contact);

  }
*/
}
