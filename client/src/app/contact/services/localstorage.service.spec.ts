import { TestBed, inject } from '@angular/core/testing';
import 'rxjs/add/observable/of';
import { LocalstorageService } from './localstorage.service';
import {Contact} from "../contact";
import {mapChildrenIntoArray} from "@angular/router/src/url_tree";
import  * as _  from 'lodash';

describe('LocalstorageService', () => {

  let localStorageKey = 'ca-contacts';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalstorageService]
    });
  });

  // The Mocking of the LocalStorage
  beforeEach(() => {
    let store = {};

    spyOn(localStorage, 'getItem').and.callFake(function (key) {
      return store[key];
    });
    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      store[key] = value;
    });

  });

  function contactArray() {
    return [
      new Contact(1, 'FirstName', 'LastName', '01234567', 'Address 1', 'City'),
      new Contact(2, 'SecondName', 'LastName', '01234567', 'Address 2', 'City'),
      new Contact(3, 'ThirdName', 'LastName', '01234567', 'Address 3', 'City')
    ]
  }

  it('Should initialize local storage', inject([LocalstorageService], (service: LocalstorageService) => {
    let data = localStorage.getItem(localStorageKey);
    expect(JSON.parse(data)).toEqual([]);
  }));

  it('#findContacts should return all contacts', inject([LocalstorageService], (service: LocalstorageService) => {

    let contacts = contactArray();
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    let contactIdS = _.map(contacts, 'id');

    service.findContacts().subscribe((contacts: Contact[]) => {
      expect(contacts.length).toBe(3);
      _.forEach(contacts, function (c) {
        expect(contactIdS).toContain(c.id);
      })
    });
  }));

  it('#deleteContact should delete contact', inject([LocalstorageService], (service: LocalstorageService) => {
    let contacts = contactArray();
    let contact = contacts[1];
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    // let contactIdS = _.map(contacts, 'id');

    service.deleteContact(contact).subscribe((contacts: Contact[]) => {

      _.forEach(contacts, function () {
        // expect(contactIdS).toContain(!c[1].id);
        expect(contacts.length).toBe(2);
      })
    });
  }));

    it('#saveContact should save contact', inject([LocalstorageService], (service: LocalstorageService) => {

      let contacts = contactArray();
      let contact = [4, 'FourthName', 'LastName', '01234567', 'Address 3', 'City'];
      // {id:4, firstName:'FourthName', lastName:'LastName', phone:'01234567', address:'Address 3', city:'City'};
      localStorage.setItem(localStorageKey, JSON.stringify(contacts));
      // let contactIdS = _.map(contacts, 'id');

      service.saveContact(contact).subscribe((contacts: Contact[]) => {

        _.forEach(contacts, function () {
          // expect(contactIdS).toContain(c.id);
          expect(contacts.length).toBe(4);

        });
      });
    }));

});
