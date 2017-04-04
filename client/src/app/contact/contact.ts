export class Contact {
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _phone: number;
  private _address: string;
  private _city: string;

  set id(value: number) {
    this._id = value;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  set phone(value: number) {
    this._phone = value;
  }

  set address(value: string) {
    this._address = value;
  }

  set city(value: string) {
    this._city = value;
  }

  get id(): number {
    return this._id;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get phone(): number {
    return this._phone;
  }

  get address(): string {
    return this._address;
  }

  get city(): string {
    return this._city;
  }

  constructor(id?: number, firstName?: string, lastName?: string, phone?: number, address?: string, city?: string) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._phone = phone;
    this._address = address;
    this._city = city;
  }
}
