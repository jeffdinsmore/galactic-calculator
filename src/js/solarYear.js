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
  
  lifeExpectancy() {
    let random = (Math.random() * 25) + 72;
    this.randomAge = Math.floor(10 * random)/10;
    this.mercuryLife = Math.floor(10* this.randomAge / 0.24)/10;
    this.venusLife = Math.floor(10 * this.randomAge / 0.62)/10;
    this.marsLife = Math.floor(10 * this.randomAge / 1.88)/10
    this.jupiterLife = Math.floor(10 * this.randomAge / 11.86)/10;
  }

  solarYearsLeft () { 
    this.yearsLeft = [];
    this.yearsLeft.push(this.randomAge - this.age);
    this.earthLeft = this.yearsLeft[0];
    this.yearsLeft.push(this.mercuryLife - this.mercuryAge);
    this.yearsLeft.push(this.venusLife - this.venusAge);
    this.yearsLeft.push(this.marsLife - this.marsAge);
    this.yearsLeft.push(this.jupiterLife - this.jupiterAge);
    this.yearsLeft = this.yearsLeft.map(function(element) {
      return Number(element.toFixed(1));
    });
  } 

  solarYearsPassed () { 
    this.yearsPassed = [];
    this.yearsPassed.push(this.age - this.randomAge);
    this.earthPassed = this.yearsPassed[0];
    this.yearsPassed.push(this.mercuryAge - this.mercuryLife);
    this.yearsPassed.push(this.venusAge - this.venusLife);
    this.yearsPassed.push(this.marsAge - this.marsLife);
    this.yearsPassed.push(this.jupiterAge - this.jupiterLife);
    this.yearsPassed = this.yearsPassed.map(function(element) {
      return Number(element.toFixed(1));
    });
  } 

}


