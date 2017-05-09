export class Contact {
  /*
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _phone: number;
  private _address: string;
  private _city: string;
  */
   id: number;
   firstName: string;
   lastName: string;
   phone: string;
   address: string;
   city: string;

  constructor(id?: number, firstName?: string, lastName?: string, phone?: string, address?: string, city?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.address = address;
    this.city = city;
  }
}
