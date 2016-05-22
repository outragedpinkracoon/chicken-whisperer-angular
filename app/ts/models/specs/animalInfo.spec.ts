import { AnimalInfo } from '../AnimalInfo';

describe('Animal Info', () => {

  it("should return singular", function() {
    expect(new AnimalInfo().singular("chickens")).toBe("chicken");
  });

  it("should return capped", function() {
    expect(new AnimalInfo().capped("chicken")).toBe("Chicken");
  });


});