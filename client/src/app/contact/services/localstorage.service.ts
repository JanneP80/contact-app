import { Injectable } from '@angular/core';
import { Contact } from 'app/contact/contact';
import * as _ from 'lodash';
import {ContactStorage} from "./contact-storage";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LocalstorageService implements ContactStorage {

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
    return Observable.of(contacts);
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
    return Observable.of(contacts);
  }

  readContactsLocalStorage(){
   // previously just findAllContacts(){
    let data = localStorage.getItem(this.localStorageKey);
    return JSON.parse(data);
    // observable että voi käyttää suoraan webapi/localstorage tiloissa
  }

  findAllContacts(){
    let contacts = this.readContactsLocalStorage();
    return Observable.of(contacts);
  }

   writeLocalStorageContacts(contacts) {
    contacts = JSON.stringify(contacts);
    localStorage.setItem(this.localStorageKey, contacts);
  }
}
