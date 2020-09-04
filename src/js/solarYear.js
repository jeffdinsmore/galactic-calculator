export default class SolarYears {
  constructor(mercury, venus, earth, mars, jupiter, randomAge) {
    this.mercury = mercury;
    this.venus = venus;
    this.earth = earth;
    this.mars = mars;
    this.jupiter = jupiter;
    this.randomAge = randomAge;
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
}



