import { Injectable } from '@angular/core';
import {Contact} from "app/contact/contact";

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor() {


  }

  public findContacts(): Contact[]{
    return this.contacts;
  }
}
