const profile = {
  name: 'Carla',
  age: 26,
  coords: {
    lat: 40.4168,
    lng: 3.7038
  },
  setAge(age : number): void {
    this.age = age;
  },
  setCoords(coords: { 
    lat: number,
    lng: number 
  }): void{
    this.coords = coords;
  }
};

// destructuring the profile object and get the age inside our const
const { age }: { age: number } = profile;

// destructuring coords
const { 
  coords: {lat, lng } 
}: { 
  coords: { lat: number, lng: number} 
} = profile;