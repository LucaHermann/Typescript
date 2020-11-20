interface Reportable {
  summary(): string;
};

const oldSuperstrada = {
  name: 'superstrada',
  years: new Date(),
  broken: false,
  summary(): string {
    return `
      This ${this.name} was build in ${this.years} years.
      This moto is broken ? ${this.broken}`;
  }
};

const beer = {
  color: 'yellow',
  carbonated: true,
  sugar: 12,
  summary(): string {
    return `
      This beer is ${this.color}. 
      It's a carbonated beer? ${this.carbonated}. 
      It's contain ${this.sugar}g of sugar. `
  }
}

// this object don't fit to the interface because it's miss the summary function
const oldGsxr = {
  name: 'Gsxr',
  years: '2015',
  broken: true
};

const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

printSummary(oldSuperstrada);
printSummary(beer);
//printVehicle(oldGsxr);
// Argument of type '{ name: string; years: string; broken: boolean; }' is not assignable to parameter of type 'Reportable'.
// Property 'summary' is missing in type '{ name: string; years: string; broken: boolean; }' but required in type 'Reportable'