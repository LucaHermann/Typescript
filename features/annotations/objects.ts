const profile = {
  name: 'Carla',
  age: 26,
  coords: {
    lat: 40.4168,
    lng: 3.7038
  },
  setAge(age : number): void {
    this.age = age;
  }
};

// destructuring the profile object and get the age inside our const
const { age }: { age: number } = profile;

const { 
  coords: {lat, lng } 
}: { 
  coords: { lat: number, lng: number} 
} = profile