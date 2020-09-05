export default class SolarYears {
  constructor(mercury, venus, mars, jupiter, randomAge, yearsLeft, yearsPassed) {
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
    this.randomAge = randomAge;
    this.yearsLeft = yearsLeft;
    this.yearsPassed = yearsPassed;
  }

  solarYearEquation (age) {
    this.mercury = Math.floor(10* age / 0.24)/10;
    this.venus = Math.floor(10 * age / 0.62)/10;
    this.mars = Math.floor(10 * age / 1.88)/10;
    this.jupiter = Math.floor(10 * age / 11.86)/10;
  }
  
  randomNumber () {
    let random = (Math.random() * 25) + 72;
    this.randomAge = Math.floor(10 * random)/10;
  }

  solarYearsLeft (age) { 
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
    } 

  solarYearsPassed (age) { 
      this.yearsPassed = [];
      this.yearsPassed.push(age - this.randomAge);
      this.earthPassed = this.yearsPassed[0];
      this.yearsPassed.push(this.earthPassed/0.24);
      this.yearsPassed.push(this.earthPassed/0.62);
      this.yearsPassed.push(this.earthPassed/1.88);
      this.yearsPassed.push(this.earthPassed/11.86);
      this.yearsPassed = this.yearsPassed.map(function(element) {
        return Number(element.toFixed(1));
      });
    } 

  lifeExpectancy() {
    this.mercuryLife = (this.mercury + this.yearsLeft[1]).toFixed(1);
    this.venusLife = (this.venus + this.yearsLeft[2]).toFixed(1);
    this.marsLife = (this.mars + this.yearsLeft[3]).toFixed(1);
    this.jupiterLife = (this.jupiter + this.yearsLeft[4]).toFixed(1);
  }
}


