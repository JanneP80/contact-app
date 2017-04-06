import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {Contact} from "../contact";
import {MdDialog} from '@angular/material';
// import {ContactDialog} from '../contact-dialog/contact-dialog.component'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() private _contacts: [Contact];
  @Output() select: EventEmitter<Contact>;

  @Output() private _editContact: EventEmitter<Contact>;
  @Output() private _removeContact: EventEmitter<Contact>;
  @Output() private _showContactOnMap: EventEmitter<Contact>;

  get editContact(): EventEmitter<Contact> {
    return this._editContact;
  }

  set editContact(value: EventEmitter<Contact>) {
    this._editContact = value;
  }

  get contacts(): [Contact] {
    return this._contacts;
  }

  set contacts(value: [Contact]) {
    this._contacts = value;
  }

  get removeContact(): EventEmitter<Contact> {
    return this._removeContact;
  }

  set removeContact(value: EventEmitter<Contact>) {
    this._removeContact = value;
  }

  get showContactOnMap(): EventEmitter<Contact> {
    return this._showContactOnMap;
  }

  set showContactOnMap(value: EventEmitter<Contact>) {
    this._showContactOnMap = value;
  }

  constructor() {
    this.select = new EventEmitter();
  }

  ngOnInit() {
  }
/*
  contactSelected(contact: Contact){
    this.select.emit(contact);

  }
*/
}
