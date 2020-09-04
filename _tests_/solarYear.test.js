import SolarYears from './../src/js/solarYear.js';

describe('SolarYears', () => {

  test('should correctly return the solar years of mercury at 0.24 Earth Years', () => {
    const solarYears = new SolarYears();
    solarYears.mercuryYear(10);
    expect(solarYears.mercury).toEqual(10/.24);
  });
});