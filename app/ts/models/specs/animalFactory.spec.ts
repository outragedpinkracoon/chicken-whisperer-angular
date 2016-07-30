import { AnimalFactory } from '../animalFactory';
import { Chicken } from '../../game/chicken';

describe('Animal Factory', () => {

  var animalFactory;

  beforeEach(function() {
    animalFactory = new AnimalFactory();
  });


  it("should return default pen", function() {
    var set = animalFactory.defaultPen();
    expect(set.count()).toBe(4);
    expect(set.chickens[0].speed).toBe(14);
  });

  it("should have set of names", function() {
    var chickens = animalFactory.names["chickens"];
    var pandas = animalFactory.names["pandas"];
    expect(chickens.length).toBe(4);
    expect(pandas.length).toBe(4);
  });

  it("should set image", function() {
    var item = new Chicken({});
    animalFactory.setImage(item, "chickens", 1);
    expect(item.image).toEqual("/app/assets/images/chickens/1.png");
  });

  it("should set name", function() {
    var item = new Chicken({});
    animalFactory.setName(item, ["Popo","Pudgy"]);
    expect(item.name).toEqual("Pudgy");
  });

  it("should return correct animals", function() {
    var set = animalFactory.generateSet("pandas");
    expect(set.count()).toBe(4);
    expect(set.chickens[0].name).toEqual("Binky");
    expect(set.chickens[0].speed).toBe(14);
    expect(set.chickens[0].scare).toBe(1);
    expect(set.chickens[0].image).toEqual("/app/assets/images/pandas/1.png");
  });
});