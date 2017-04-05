import { Injectable } from '@angular/core';
import {Contact} from "app/contact/contact";

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact(0, 'Vesa', 'Heimo', 234, 'kanata'),
      new Contact(1, 'Mörkö', 'Pötkö',23445,'jaappani'),
      new Contact(2, 'Aatu', 'Beetu',5466,'ceetä')
    ];

  }

  public findContacts(): Contact[]{
    return this.contacts;
  }
}
