import faker from 'faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  phoneNumber: string;
  email: string;
  location: {
    lat: number,
    lng: number
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
      <h2>Company Informations:</h2>
      <br />
      <h3>Compagny name: ${this.companyName},</h3>
      <h3>Our motto: ${this.catchPhrase},</h3>
      <h3>Phonenumber: ${this.phoneNumber},</h3>
      <h3>Email: ${this.email}.</h3>
    `
  }
}