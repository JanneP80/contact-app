import { Component, OnInit } from '@angular/core';
import { Contact } from 'app/contact/contact';
import { ContactService } from 'app/contact/services/contact.service';
import { DialogService } from 'app/contact/services/dialog.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  /*
   Here belongs:
   On html template:
   - Contact List
   - New/add Contact -Button
   Logic:
   - communications to and from contact.service via contacts:[]
   - listening contact-list.component incoming actions
   */

  contacts: Contact[];
  title = 'Contacts:';

  constructor(public contactService: ContactService, public dialogService: DialogService) {
    /* TODO Handle ContactList here */
    this.contacts = this.contactService.findContacts();
  }

  viewContacts() {
    this.contacts = this.contactService.findContacts();
    console.log('view Now');
  }

  /*Call Add and Edit */
  addEditContact(contact) {
    this.dialogService.contactDialog(contact)
      .subscribe(contact => {
          if (contact) {
            console.log(contact);
            this.contactService.saveContact(contact);
            this.viewContacts();
          }
        }
      );
    // this.viewContacts();
  }

  /* other logic here*/
  onAddContact() {
    // this.editOrNot = false;
    this.addEditContact(null);
  }

  onEditContact(contact: Contact) {
    // this.editOrNot = true;
    this.addEditContact(contact);
  }

  onDeleteContact(contact: Contact) {
    this.contactService.deleteContact(contact);
    this.viewContacts();
  }

  onShowContactOnMap(contact: Contact) {
    let address = contact.address + ', ' + contact.city;
    this.dialogService.mapDialog(address);
  }
  ngOnInit() {
  }

}
