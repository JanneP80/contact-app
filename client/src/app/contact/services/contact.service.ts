import { Injectable } from '@angular/core';
import { Contact } from 'app/contact/contact';
import { LocalstorageService } from 'app/contact/services/localstorage.service';
import { ContactApiService } from "./contact-api.service";
// import { environment } from "../../../environments/environment.local";
import { ContactStorage } from "./contact-storage";
import { environment } from "../../../environments/environment";
// import { AuthenticationService } from "./authentication.service";

@Injectable()
export class ContactService {
  /*
  Here is handled the communication with the storage.

   */
  contactStorage : ContactStorage;

  constructor(private contactApi: ContactApiService, private localStorage: LocalstorageService) {
      this.contactStorage = environment.endpointUrl ? contactApi : localStorage;
    }

  public findContacts() {
    // return this.localStorage.readContactsLocalStorage();
    return this.contactStorage.findContacts();
  }

  public saveContact(contact: Contact) {
    console.log('--- HERE ---');
    // return this.localStorage.saveContact(contact);
    return this.contactStorage.saveContact(contact);
  }

  public deleteContact(contact: Contact) {
    console.log('--- WHERE ---');
    // return this.localStorage.deleteContact(contact);
    return this.contactStorage.deleteContact(contact);
  }

}
