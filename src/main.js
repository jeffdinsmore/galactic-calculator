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
    $("#outputYear").html("Your life expectancy is..." + "<br><em><strong>" + solarYears.randomAge + " Earth years</em></strong");
    
    solarYears.solarYearsLeft(inputtedAge);
    solarYears.lifeExpectancy();
    $("#mercuryLife").text(solarYears.mercuryLife + " years");
    $("#venusLife").text(solarYears.venusLife + " years");
    $("#marsLife").text(solarYears.marsLife + " years");
    $("#jupiterLife").text(solarYears.jupiterLife + " years");
    
    solarYears.solarYearsPassed(inputtedAge);
    if (inputtedAge > solarYears.randomAge) {
      $("#outputYear").html("Your life expectancy was..." + "<br><strong><em>" + solarYears.randomAge + " Earth years</em></strong>");
      $("#earthLeft").text("You have outlived most people by " + solarYears.yearsPassed[0] + " years");
      $("#mercuryLeft").html("Years passed expectancy: " + "<strong><em>" + solarYears.yearsPassed[1] + " years</strong></em>");
      $("#venusLeft").html("Years passed expectancy: " + "<strong><em>" + solarYears.yearsPassed[2] + " years</strong></em>");
      $("#marsLeft").html("Years passed expectancy: " + "<strong><em>" + solarYears.yearsPassed[3] + " years</strong></em>");
      $("#jupiterLeft").html("Years passed expectancy: " + "<strong><em>" + solarYears.yearsPassed[4] + " years</strong></em>");
    } else {
      $("#earthLeft").text("You only have " + solarYears.yearsLeft[0] + " years left to live");
      $("#mercuryLeft").html("Years left to live: " + "<strong><em>" + solarYears.yearsLeft[1] + " years</strong></em>");
      $("#venusLeft").html("Years left to live: " + "<strong><em>" + solarYears.yearsLeft[2] + " years</strong></em>");
      $("#marsLeft").html("Years left to live: " + "<strong><em>" + solarYears.yearsLeft[3] + " years</strong></em>");
      $("#jupiterLeft").html("Years left to live: " + "<strong><em>" + solarYears.yearsLeft[4] + " years</strong></em>");
    }
  });
});