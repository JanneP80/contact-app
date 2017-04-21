import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from "../contact";
import {environment} from "../../../environments/environment";

@Injectable()
export class ContactApiService {

  // url = 'http://localhost:60829/api/contacts';
  // url = environment.endpointUrl + '/contacts';
  url = environment.endpointUrl + '/contacts';
  // url = environment.endpointUrl + '/values';

  constructor(private http: Http) { }

  readContactsApi() {

    /*
     return this.http.get(url).map(function (response) {
     return response.json() as Contact[];
     });
     */
    return this.http.get(this.url).map(response =>
      response.json() as Contact[]);


    // let data = localStorage.getItem(this.localStorageKey);
    // return JSON.parse(data);
  }

  saveContactsApi(contact:Contact) {

    return contact.id ? this.updateContact(contact) : this.createContact(contact);
  }

  createContact(contact:Contact){
    return this.http.post(this.url,contact);
  }

  updateContact(contact:Contact){
    return this.http.put(this.url +'/' +contact.id, contact);
  }

  deleteContactApi(contact:Contact){

   return this.http.delete(this.url +'/' +contact.id);
   // this.updateContact(contact);
  }

}
