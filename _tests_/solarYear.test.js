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
    expect(solarYears.yearsLeft[0] <= 44 && solarYears.yearsLeft[0] >= 19).toBe(true);
  });

  test('should correctly return the random age between 72 and 97 minus the inputted age and then divide by 0.24', () => {
    expect(solarYears.yearsLeft[1] <= ((97-53)/.24) && solarYears.yearsLeft[1] >= ((72-53)/.24)).toBe(true);
  });

  test('should correctly return the random age between 72 and 97 minus the inputted age and then divide by 0.62', () => {
    expect(solarYears.yearsLeft[2] <= ((97-53)/.62) && solarYears.yearsLeft[2] >= ((72-53)/.62)).toBe(true);
  });

  test('should correctly return the random age between 72 and 97 minus the inputted age and then divide by 1.88', () => {
    expect(solarYears.yearsLeft[3] <= ((97-53)/1.88) && solarYears.yearsLeft[3] >= ((72-53)/1.88)).toBe(true);
  });
  
  test('should correctly return the random age between 72 and 97 minus the inputted age and then divide by 11.86', () => {
    expect(solarYears.yearsLeft[4] <= ((97-53)/11.86) && solarYears.yearsLeft[4] >= ((72-53)/11.86)).toBe(true);
  });

  test('should correctly return inputted age minus the random age for Earth', () => {
    solarYears.solarYearsPassed(98);
    expect(solarYears.yearsPassed[0] <= 26 && solarYears.yearsPassed[0] >= 1).toBe(true);
  });

  test('should correctly return inputted age minus the random age divided by 0.24 for Mercury', () => {
    solarYears.solarYearsPassed(98);
    expect(solarYears.yearsPassed[1] <= ((98-72)/.24) && solarYears.yearsPassed[1] >= ((98-97)/.24)).toBe(true);
  });

  test('should correctly return inputted age minus the random age divided by 0.62 for Venus', () => {
    solarYears.solarYearsPassed(98);
    expect(solarYears.yearsPassed[2] <= ((98-72)/.62) && solarYears.yearsPassed[2] >= ((98-97)/.62)).toBe(true);
  });

  test('should correctly return inputted age minus the random age divided by 1.88 for Mars', () => {
    solarYears.solarYearsPassed(98);
    expect(solarYears.yearsPassed[3] <= ((98-72)/1.88) && solarYears.yearsPassed[3] >= ((98-97)/1.88)).toBe(true);
  });

  test('should correctly return inputted age minus the random age divided by 11.86 for Jupiter', () => {
    solarYears.solarYearsPassed(98);
    expect(solarYears.yearsPassed[4] <= ((98-72)/11.86) && solarYears.yearsPassed[4] >= ((98-97)/11.86)).toBe(true);
  });

  test('should correctly return life expectancy by adding Mercury age plus Mercury years left', () => {
    solarYears.solarYearEquation(50);
    solarYears.solarYearsLeft(50);
    solarYears.lifeExpectancy();
    expect(solarYears.mercuryLife <= (97/.24) && solarYears.mercuryLife >= (72/.24)).toBe(true);
  });

  test('should correctly return life expectancy by adding Venus age plus mercury years left', () => {
    solarYears.lifeExpectancy();
    expect(solarYears.venusLife <= (97/.62) && solarYears.venusLife >= (72/.62)).toBe(true);
  });

  test('should correctly return life expectancy by adding Venus age plus mercury years left', () => {
    solarYears.lifeExpectancy();
    expect(solarYears.marsLife <= (97/1.88) && solarYears.marsLife >= (72/1.88)).toBe(true);
  });

  test('should correctly return life expectancy by adding Venus age plus mercury years left', () => {
    solarYears.lifeExpectancy();
    expect(solarYears.jupiterLife <= (97/11.86) && solarYears.jupiterLife >= (72/11.86)).toBe(true);
  });
});