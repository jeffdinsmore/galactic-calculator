import SolarYears from './../src/js/solarYear.js';

describe('SolarYears', () => {
  const solarYears = new SolarYears();

  test('should correctly return the solar years of mercury at 0.24 Earth Years', () => {
    solarYears.solarYearEquation(10);
    expect(solarYears.mercury).toEqual(41.6);
  });

  test('should correctly return the solar years of Venus at 0.62 Earth Years', () => {
    solarYears.solarYearEquation(10);
    expect(solarYears.venus).toEqual(16.1);
  });

  test('should correctly return inputted Earth years', () => {
    solarYears.solarYearEquation(10);
    expect(solarYears.earth).toEqual(10);
  });

  test('should correctly return the solar years of Mars at 1.88 Earth Years', () => {
    solarYears.solarYearEquation(10);
    expect(solarYears.mars).toEqual(5.3);
  });

  test('should correctly return the solar years of Jupiter at 11.86 Earth Years', () => {
    solarYears.solarYearEquation(10);
    expect(solarYears.jupiter).toEqual(0.8);
  });

  test('should correctly return a random age between 72 and 97', () => {
    solarYears.randomNumber();
    expect(solarYears.randomAge <= 97 && solarYears.randomAge >= 72).toBe(true);
  });

  test('should correctly return the random age between 72 and 97 minus the inputted age', () => {
    solarYears.solarYearsLeft(53);
    // expect(solarYears.mercury <= 44 && solarYears.yearsLeft >= 19).toBe(true);
    expect(solarYears.yearsLeft[0] <= 44 && solarYears.yearsLeft[0] >= 19).toBe(true);
  });

  test('should correctly return the random age between 72 and 97 minus the inputted age and then divide by 0.24', () => {
    expect(solarYears.yearsLeft[1] <= 183 && solarYears.yearsLeft[1] >= 79).toBe(true);
  });

  test('should correctly return the random age between 72 and 97 minus the inputted age and then divide by 0.24', () => {
    expect(solarYears.yearsLeft[2] <= 70 && solarYears.yearsLeft[2] >= 30).toBe(true);
  });

  test('should correctly return the random age between 72 and 97 minus the inputted age and then divide by 0.24', () => {
    expect(solarYears.yearsLeft[3] <= 70 && solarYears.yearsLeft[3] >= 30).toBe(true);
  });
  
});