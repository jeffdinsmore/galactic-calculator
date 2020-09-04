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
    console.log(inputtedAge)
    solarYears();
    
    $("#output").text(inputtedAge);
    
  });
});