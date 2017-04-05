import { Injectable } from '@angular/core';
import {Contact} from "app/contact/contact";

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact(0, 'Vesa', 'Heimo'),
      new Contact(1, 'Mörkö', 'Pötkö'),
      new Contact(2, 'Aatu', 'Beetu')
    ];

  }

  public findContacts(): Contact[]{
    return this.contacts;
  }
}
