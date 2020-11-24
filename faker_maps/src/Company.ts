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
}