import { Injectable } from '@angular/core';
import { Contact } from 'app/contact/contact';
import * as _ from 'lodash';

@Injectable()
export class LocalstorageService {

  private localStorageKey = 'ca-contacts';

  constructor() {
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
  }

  deleteContact(contact){
    let contacts = this.readContactsLocalStorage();
    _.remove(contacts, function (cont: Contact) {
      return _.isEqual(contact.id, cont.id);
    });
    this.writeLocalStorageContacts(contacts);
    alert('Contact deleted.');
  }

  saveContact(contact){
    let contacts = this.readContactsLocalStorage();
    if (!contact.id) {
      let lastSaved = <Contact>_.maxBy(contacts, 'id');
      // if lastSaved exists then lastsaved.id + 1, if no lastSaved then contact.id == 1
      contact.id = lastSaved ? lastSaved.id + 1 : 1;
      contacts.push(contact);
    } else {
      contacts = _.map(contacts, function (cont: Contact) {
        return cont.id == contact.id ? contact : cont;
      });
    }
    this.writeLocalStorageContacts(contacts);
  }

  readContactsLocalStorage(){
    let data = localStorage.getItem(this.localStorageKey);
    return JSON.parse(data);
  }

  private writeLocalStorageContacts(contacts) {
    contacts = JSON.stringify(contacts);
    localStorage.setItem(this.localStorageKey, contacts);
  }
}
