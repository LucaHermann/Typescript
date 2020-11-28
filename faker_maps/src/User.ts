import faker from 'faker';

import { IMappable } from './CustomMap';

export class User implements IMappable {
  firstName: string;
  lastName: string;
  jobTitle: string;
  phoneNumber: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.jobTitle = faker.name.jobTitle()
    this.phoneNumber = faker.phone.phoneNumber();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  };

  markerContent(): string {
    return ` 
      <h2>User informations:</h2>
      <br />
      <h3>Firstname: ${this.firstName},</h3>
      <h3>Lastname: ${this.lastName},</h3>
      <h3>Jobtitle: ${this.jobTitle},</h3>
      <h3>Phonenumber: ${this.phoneNumber}.</h3>
    `
  };
}