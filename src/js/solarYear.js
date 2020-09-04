export default class SolarYears {
  constructor(mercury, venus, earth, mars, jupiter, randomAge, yearsLeft) {
    this.mercury = mercury;
    this.venus = venus;
    this.earth = earth;
    this.mars = mars;
    this.jupiter = jupiter;
    this.randomAge = randomAge;
    this.yearsLeft = yearsLeft;
  }

  mercuryYear (age) {
    this.mercury = age / 0.24;
  }
  venusYear (age) {
    this.venus = age / 0.62;
  }

  earthYear (age) {
   this.earth = age;
  }

  marsYear (age) {
    this.mars = age / 1.88;
   }

   jupiterYear (age) {
    this.jupiter = age / 11.86;
   }

   randomNumber () {
    let random = (Math.random() * 25) + 72;
    this.randomAge = Math.round(10 * random)/10;

   }

   solarYearsLeft (age, mercuryLeft, venusLeft, marsLeft, jupiterLeft) {
    this.yearsLeft = this.randomAge - age;
    mercuryLeft = Math.round(10 * (this.yearsLeft / 0.24) / 10);
    venusLeft = Math.round(10 * (this.yearsLeft / 0.62) / 10);
    marsLeft = Math.round(10 * (this.yearsLeft / 1.88) / 10);
    jupiterLeft = jupiterYear(this.yearsLeft);
    
   }
}



