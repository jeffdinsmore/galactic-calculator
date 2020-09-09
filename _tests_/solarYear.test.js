import SolarYears from './../src/js/solarYear.js';

describe('SolarYears', () => {
  let solarYears = new SolarYears(53);
  solarYears.lifeExpectancy();

  test('should correctly return the solar years of mercury at 0.24 Earth Years', () => {
    solarYears.solarYearEquation();
    expect(solarYears.mercuryAge).toEqual(220.8);
  });

  test('should correctly return the solar years of Venus at 0.62 Earth Years', () => {
    solarYears.solarYearEquation();
    expect(solarYears.venusAge).toEqual(85.4);
  });

  test('should correctly return the solar years of Mars at 1.88 Earth Years', () => {
    solarYears.solarYearEquation();
    expect(solarYears.marsAge).toEqual(28.1);
  });

  test('should correctly return the solar years of Jupiter at 11.86 Earth Years', () => {
    solarYears.solarYearEquation();
    expect(solarYears.jupiterAge).toEqual(4.4);
  });

  test('should correctly return a random age between 72 and 97', () => {
    solarYears.lifeExpectancy();
    expect(solarYears.earthLife <= 97 && solarYears.earthLife >= 72).toBe(true);
  });

  test('should correctly return the random age between 72 and 97 minus the age 53', () => {
    solarYears.solarYearsLeft();
    expect(solarYears.earthLeft <= 44 && solarYears.earthLeft >= 19).toBe(true);
  });

  test('should correctly return the random age between 72 and 97 minus the age 53 and then divide by 0.24', () => {
    solarYears.solarYearsLeft();
    expect(solarYears.mercuryLeft <= ((97-53)/.24) && solarYears.mercuryLeft >= ((72-53)/.24)).toBe(true);
  });

  test('should correctly return the random age between 72 and 97 minus the age 53 and then divide by 0.62', () => {
    solarYears.solarYearsLeft();
    expect(solarYears.venusLeft <= ((97-53)/.62) && solarYears.venusLeft >= ((72-53)/.62)).toBe(true);
  });

  test('should correctly return the random age between 72 and 97 minus the age 53 and then divide by 1.88', () => {
    solarYears.solarYearsLeft();
    expect(solarYears.marsLeft <= ((97-53)/1.88) && solarYears.marsLeft >= ((72-53)/1.88)).toBe(true);
  });
  
  test('should correctly return the random age between 72 and 97 minus the age 53 and then divide by 11.86', () => {
    solarYears.solarYearsLeft();
    expect(solarYears.jupiterLeft <= ((97-53)/11.86) && solarYears.jupiterLeft >= ((72-53)/11.86)).toBe(true);
  });
});

  describe('SolarYears', () => {
  let solarYears = new SolarYears(98);
  solarYears.lifeExpectancy();
  solarYears.solarYearEquation();
  solarYears.solarYearsLeft();

  test('should correctly return age 98 minus the random age for Earth', () => {
    solarYears.solarYearsPassed();
    expect(solarYears.earthPassed <= 26 && solarYears.earthPassed >= 1).toBe(true);
  });

  test('should correctly return age 98 minus the random age divided by 0.24 for Mercury', () => {
    solarYears.solarYearsPassed();
    expect(solarYears.mercuryPassed <= ((98-72)/.24) && solarYears.mercuryPassed >= ((98-97)/.24)).toBe(true);
  });

  test('should correctly return age 98 minus the random age divided by 0.62 for Venus', () => {
    solarYears.solarYearsPassed();
    expect(solarYears.venusPassed <= ((98-72)/.62) && solarYears.venusPassed >= ((98-97)/.62)).toBe(true);
  });

  test('should correctly return age 98 minus the random age divided by 1.88 for Mars', () => {
    solarYears.solarYearsPassed();
    expect(solarYears.marsPassed <= ((98-72)/1.88) && solarYears.marsPassed >= ((98-97)/1.88)).toBe(true);
  });

  test('should correctly return age 98 minus the random age divided by 11.86 for Jupiter', () => {
    solarYears.solarYearsPassed();
    expect(solarYears.jupiterPassed <= ((98-72)/11.86) && solarYears.jupiterPassed >= ((98-97)/11.86)).toBe(true);
  });

  test('should correctly return life expectancy by adding Mercury age plus Mercury years left', () => {
    
    solarYears.lifeExpectancy();
    expect(solarYears.mercuryLife <= (97/.24) && solarYears.mercuryLife >= (72/.24)).toBe(true);
  });

  test('should correctly return life expectancy by adding Venus age plus Venus years left', () => {
    solarYears.lifeExpectancy();
    expect(solarYears.venusLife <= (97/.62) && solarYears.venusLife >= (72/.62)).toBe(true);
  });

  test('should correctly return life expectancy by adding Mars age plus Mars years left', () => {
    solarYears.lifeExpectancy();
    expect(solarYears.marsLife <= (97/1.88) && solarYears.marsLife >= (72/1.88)).toBe(true);
  });

  test('should correctly return life expectancy by adding Jupiter age plus Jupiter years left', () => {
    solarYears.lifeExpectancy();
    expect(solarYears.jupiterLife <= (97/11.86) && solarYears.jupiterLife >= (72/11.86)).toBe(true);
  });
});