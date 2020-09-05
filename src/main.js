import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SolarYears from './../src/js/solarYear.js';

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let solarYears = new SolarYears();
    const inputtedAge = $("input#age").val();
    solarYears.solarYearEquation(inputtedAge);
    $("#mercury").text(solarYears.mercury + " years");
    $("#venus").text(solarYears.venus + " years");
    $("#mars").text(solarYears.mars + " years");
    $("#jupiter").text(solarYears.jupiter + " years");
    solarYears.randomNumber();
    $("#outputYear").text(solarYears.randomAge + " Earth years");
    solarYears.solarYearsLeft(inputtedAge);
    $("#mercuryLife").text(solarYears.randomAge[1] + " years");
    $("#venusLife").text(solarYears.randomAge[2] + " years");
    $("#marsLife").text(solarYears.randomAge[3] + " years");
    $("#jupiterLife").text(solarYears.randomAge[4] + " years");
    $("#mercuryLeft").text(solarYears.yearsLeft[1] + " years");
    $("#venusLeft").text(solarYears.yearsLeft[2] + " years");
    $("#marsLeft").text(solarYears.yearsLeft[3] + " years");
    $("#jupiterLeft").text(solarYears.yearsLeft[4] + " years");
    console.log(solarYears.yearsLeft)
    console.log(solarYears.randomAge)
  });
});

// export default class SolarYears {
//   constructor(mercury, venus, mars, jupiter, randomAge, yearsLeft) {
//     this.mercury = mercury;
//     this.venus = venus;
//     this.mars = mars;
//     this.jupiter = jupiter;
//     this.randomAge = randomAge;
//     this.yearsLeft = yearsLeft;
//   }

//   solarYearEquation (age) {
//     this.mercury = Math.floor(10* age / 0.24)/10;
//     this.venus = Math.floor(10 * age / 0.62)/10;
//     this.mars = Math.floor(10 * age / 1.88)/10;
//     this.jupiter = Math.floor(10 * age / 11.86)/10;
//   }
  
//   randomNumber () {
//     let random = (Math.random() * 25) + 72;
//     this.randomAge = [];
//     this.randomAge.push(Math.floor(10 * random)/10);
//     this.earthYears = this.randomAge[0];
//     this.randomAge.push(this.earthYears/.24);
//     this.randomAge.push(this.earthYears/.62);
//     this.randomAge.push(this.earthYears/1.88);
//     this.randomAge.push(this.earthYears/11.86);
//     this.randomAge = this.randomAge.map(function(element) {
//       return Number(element.toFixed(1));
//     });
//   }

//   solarYearsLeft (age) { 
//     if (age > this.randomAge) {
//       this.yearsPassed = age - this.randomAge
//     } else {
//       this.yearsLeft = [];
//       this.yearsLeft.push(this.randomAge - age);
//       this.earthLeft = this.yearsLeft[0];
//       this.yearsLeft.push(this.earthLeft/0.24);
//       this.yearsLeft.push(this.earthLeft/0.62);
//       this.yearsLeft.push(this.earthLeft/1.88);
//       this.yearsLeft.push(this.earthLeft/11.86);
//       this.yearsLeft = this.yearsLeft.map(function(element) {
//         return Number(element.toFixed(1));
//       });
//     } 
//   }
// }