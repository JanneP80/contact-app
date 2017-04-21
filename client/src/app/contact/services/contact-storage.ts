import {Contact} from "../contact";
export interface ContactStorage {

  saveContact(contact:Contact);
  deleteContact(contact:Contact);
  // readContactsLocalStorage(contact:Contact);
  // writeLocalStorageContacts(contact:Contact);
}
