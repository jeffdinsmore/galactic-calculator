import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SolarYears from './../src/js/solarYear.js';

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const inputtedAge = $("input#age").val();
    let solarYears = new SolarYears(inputtedAge);
    if (inputtedAge < 0) {
      alert("Please enter a real age!");
    } else {
      solarYears.solarYearEquation();
      $("#mercury").text(solarYears.mercuryAge + " years");
      $("#venus").text(solarYears.venusAge + " years");
      $("#mars").text(solarYears.marsAge + " years");
      $("#jupiter").text(solarYears.jupiterAge + " years");
      
      solarYears.lifeExpectancy();
      $("#outputYear").html("Your life expectancy is..." + "<br><em><strong>" + solarYears.randomAge + " Earth years</em></strong");
      
      solarYears.solarYearsLeft();
      $("#mercuryLife").text(solarYears.mercuryLife + " years");
      $("#venusLife").text(solarYears.venusLife + " years");
      $("#marsLife").text(solarYears.marsLife + " years");
      $("#jupiterLife").text(solarYears.jupiterLife + " years");
      
      solarYears.solarYearsPassed();
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
    }
  });
});