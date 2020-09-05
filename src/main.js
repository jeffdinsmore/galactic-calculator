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
    $("#outputYear").html("Your life expectancy is..." + "<br>" + solarYears.randomAge + " Earth years");
    solarYears.solarYearsLeft(inputtedAge);
    solarYears.lifeExpectancy();
    console.log(solarYears.mercuryLife);
    $("#mercuryLife").text(solarYears.mercuryLife + " years");
    $("#venusLife").text(solarYears.venusLife + " years");
    $("#marsLife").text(solarYears.marsLife + " years");
    $("#jupiterLife").text(solarYears.jupiterLife + " years");
    solarYears.solarYearsPassed(inputtedAge);
    if (inputtedAge > solarYears.randomAge) {
      $("#outputYear").html("Your life expectancy was..." + "<br>" + solarYears.randomAge + " Earth years");
      $("#mercuryLeft").text("Years passed expectancy: " + solarYears.yearsPassed[1] + " years");
      $("#venusLeft").text("Years passed expectancy: " + solarYears.yearsPassed[2] + " years");
      $("#marsLeft").text("Years passed expectancy: " + solarYears.yearsPassed[3] + " years");
      $("#jupiterLeft").text("Years passed expectancy: " + solarYears.yearsPassed[4] + " years");
    } else {
      $("#mercuryLeft").html("Years left to live: " + "<strong>" + solarYears.yearsLeft[1] + " years" + "</strong>");
      $("#venusLeft").html("Years left to live: " + "<strong>" + solarYears.yearsLeft[2] + " years" + "</strong>");
      $("#marsLeft").html("Years left to live: " + "<strong>" + solarYears.yearsLeft[3] + " years" + "</strong>");
      $("#jupiterLeft").html("Years left to live: " + "<strong>" + solarYears.yearsLeft[4] + " years" + "</strong>");
    }
  });
});