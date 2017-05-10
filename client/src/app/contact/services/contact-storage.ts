import {Contact} from "../contact";
import {Observable} from "rxjs";

export interface ContactStorage {

  saveContact(contact:Contact);
  deleteContact(contact:Contact);
  // readContactsLocalStorage(contact:Contact);
  // writeLocalStorageContacts(contact:Contact);
/*
  saveContact(contact: Contact);
  findContacts() : Observable<any>;
  deleteContact(contact: Contact)
  */
}
