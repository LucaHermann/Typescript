import faker from 'faker';

export class User {
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
    }
  }
}