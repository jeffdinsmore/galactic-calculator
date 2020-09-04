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

  solarYearEquation (age) {
    this.mercury = Math.floor(10* age / 0.24)/10;
    this.venus = Math.floor(10 * age / 0.62)/10;
    this.earth = age;
    this.mars = Math.floor(10 * age / 1.88)/10;
    this.jupiter = Math.floor(10* age / 11.86)/10;
  }
  
  randomNumber () {
    let random = (Math.random() * 25) + 72;
    this.randomAge = Math.floor(10 * random)/10;

  }

  solarYearsLeft (age) { 
    // if (age > this.randomAge) {
    //   this.yearsPassed = age - this.randomAge
    // } else {
      this.yearsLeft = [];
      this.yearsLeft.push(this.randomAge - age);
      this.earthLeft = this.yearsLeft[0];
      this.yearsLeft.push(this.earthLeft/0.24);
      this.yearsLeft.push(this.earthLeft/0.62);
      this.yearsLeft.push(this.earthLeft/1.88);
      this.yearsLeft.push(this.earthLeft/11.86);
      this.yearsLeft = this.yearsLeft.map(function(element) {
        return Number(element.toFixed(1));
      });
    // } 
  }
  //  solarYearsLeft (age) {
    
    // this.earthLeft = this.yearsLeft[0];
    // this.yearsLeft.push(math.round(10 * (this.earthLeft / 0.24))/10);
    // this.yearsLeft.push(math.round(10 * (this.earthLeft / 0.62))/10);
    // this.yearsLeft.push(math.round(10 * (this.earthLeft / 1.88))/10);
    // this.yearsLeft.push(math.round(10 * (this.earthLeft / 11.86))/10);
    // this.yearsLeft = this.randomAge - age;
    // mercuryLeft = Math.round(10 * (this.yearsLeft / 0.24) / 10);
    // venusLeft = Math.round(10 * (this.yearsLeft / 0.62) / 10);
    // marsLeft = Math.round(10 * (this.yearsLeft / 1.88) / 10);
    // jupiterLeft = jupiterYear(this.yearsLeft);
    
  //  }
}



