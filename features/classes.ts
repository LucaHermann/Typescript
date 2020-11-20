class Vehicle {
  constructor(public color: string, public years: number) {
    this.color = color;
    this.years = years;
  }

  public accelerate(): void {
    console.log('Acceleration...');
  }

  protected honk(): void {
    console.log('Honk...');
  }
}

class Moto extends Vehicle {
  constructor(public wheels: number, color: string, years: number) {
    super('red', 2020);
  }
  private drive(): void {
    console.log('Driving a moto...');
  }

  wheeling(): void {
    console.log('Wheeling...');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const ducati = new Moto(2, 'red', 2020);
console.log(`this vehicle have ${ducati.wheels} wheels, the ducati is ${ducati.color} and build in ${ducati.years}`);
ducati.startDrivingProcess();
ducati.accelerate();
ducati.wheeling();