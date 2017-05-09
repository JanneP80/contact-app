import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../contact';
import * as _ from 'lodash';

@Pipe({
  name: 'contactAddress'
})
export class AddressPipe implements PipeTransform {

  transform(contact: Contact, args?: any): any {

    if (!contact) return '';

    let addressPart = [contact.address || null, contact.city || null];
    addressPart = _.reject(addressPart, _.isNull);
    return addressPart.join(', ');
  }

}
