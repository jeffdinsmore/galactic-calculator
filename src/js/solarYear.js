export default class SolarYears {
  constructor(age) {
    this.age = age;
  }

  solarYearEquation () {
    this.mercuryAge = Math.floor(10* this.age / 0.24)/10;
    this.venusAge = Math.floor(10 * this.age / 0.62)/10;
    this.marsAge = Math.floor(10 * this.age / 1.88)/10;
    this.jupiterAge = Math.floor(10 * this.age / 11.86)/10;
  }
  
  randomNumber () {
    let random = (Math.random() * 25) + 72;
    this.randomAge = Math.floor(10 * random)/10;
  }

  solarYearsLeft () { 
    this.yearsLeft = [];
    this.yearsLeft.push(this.randomAge - this.age);
    this.earthLeft = this.yearsLeft[0];
    this.yearsLeft.push(this.earthLeft/0.24);
    this.yearsLeft.push(this.earthLeft/0.62);
    this.yearsLeft.push(this.earthLeft/1.88);
    this.yearsLeft.push(this.earthLeft/11.86);
    this.yearsLeft = this.yearsLeft.map(function(element) {
      return Number(element.toFixed(1));
    });
  } 

  solarYearsPassed () { 
    this.yearsPassed = [];
    this.yearsPassed.push(this.age - this.randomAge);
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
    this.mercuryLife = (this.mercuryAge + this.yearsLeft[1]).toFixed(1);
    this.venusLife = (this.venusAge + this.yearsLeft[2]).toFixed(1);
    this.marsLife = (this.marsAge + this.yearsLeft[3]).toFixed(1);
    this.jupiterLife = (this.jupiterAge + this.yearsLeft[4]).toFixed(1);
  }
}


