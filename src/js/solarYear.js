export default class SolarYears {
  constructor(mercury, venus, earth, mars, jupiter) {
    this.mercury = mercury;
    this.venus = venus;
    this.earth = earth;
    this.mars = mars;
    this.jupiter = jupiter;
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
}



