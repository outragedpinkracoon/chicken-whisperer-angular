import { AnimalSetInfo } from '../AnimalSetInfo';

describe('Animal Set Info', () => {

  it("should return singular", function() {
    expect(AnimalSetInfo.singular("chickens")).toBe("chicken");
  });

  it("should return capped", function() {
    expect(AnimalSetInfo.capped("chicken")).toBe("Chicken");
  });


});