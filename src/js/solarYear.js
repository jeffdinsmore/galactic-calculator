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
    this.earthLife = Math.floor(10 * random)/10;
    this.mercuryLife = Math.floor(10 * this.earthLife / 0.24)/10;
    this.venusLife = Math.floor(10 * this.earthLife / 0.62)/10;
    this.marsLife = Math.floor(10 * this.earthLife / 1.88)/10
    this.jupiterLife = Math.floor(10 * this.earthLife / 11.86)/10;
  }

  solarYearsLeft () { 
    this.earthLeft = (this.earthLife - this.age).toFixed(1);
    this.mercuryLeft = Math.floor(10 * (this.mercuryLife - this.mercuryAge))/10;
    this.venusLeft = Math.floor(10 * (this.venusLife - this.venusAge))/10;
    this.marsLeft = Math.floor(10 * (this.marsLife - this.marsAge))/10;
    this.jupiterLeft = Math.floor(10 * (this.jupiterLife - this.jupiterAge))/10;
  } 

  solarYearsPassed () { 
    this.earthPassed = (this.age - this.earthLife).toFixed(1);
    this.mercuryPassed = Math.floor(10 * (this.mercuryAge - this.mercuryLife))/10;
    this.venusPassed = Math.floor(10 * (this.venusAge - this.venusLife))/10;
    this.marsPassed = Math.floor(10 * (this.marsAge - this.marsLife))/10;
    this.jupiterPassed = Math.floor(10 * (this.jupiterAge - this.jupiterLife))/10;
  } 

}


