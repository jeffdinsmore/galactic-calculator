import SolarYears from './../src/js/solarYear.js';

describe('SolarYears', () => {
  const solarYears = new SolarYears();

  test('should correctly return the solar years of mercury at 0.24 Earth Years', () => {
    solarYears.mercuryYear(10);
    expect(solarYears.mercury).toEqual(10/.24);
  });

  test('should correctly return the solar years of Venus at 0.62 Earth Years', () => {
    solarYears.venusYear(10);
    expect(solarYears.venus).toEqual(10/.62);
  });

  test('should correctly return inputted Earth years', () => {
    solarYears.earthYear(10);
    expect(solarYears.earth).toEqual(10);
  });

  test('should correctly return the solar years of Mars at 1.88 Earth Years', () => {
    solarYears.marsYear(10);
    expect(solarYears.mars).toEqual(10/1.88);
  });
});