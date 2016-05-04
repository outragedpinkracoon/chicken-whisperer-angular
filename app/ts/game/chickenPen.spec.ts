import { CHICKENS } from './mock-chickens';
import {ChickenPen} from './chickenPen'
import {Chicken} from './chicken'

describe("Chicken Pen", function() {
  var chickenPen;
  
  beforeEach(function() {
   chickenPen = new ChickenPen(CHICKENS);
  });

  it("should have 4 chickens", function() {
    expect(chickenPen.count()).toBe(4);
  });

  it("should add a chicken", function() {
    var chicken = new Chicken({name:"Shiny"});
    chickenPen.add(chicken);
    expect(chickenPen.count()).toBe(5);
  });

  it("should remove a chicken", function() {
    var chicken = chickenPen.chickens[3];
    chickenPen.remove(chicken);
    
    expect(chickenPen.count()).toBe(3);
  });

  it("should have Chickens for capture", function() {
    expect(chickenPen.hasChickensForCapture()).toBe(true);
  });

  it("should not have Chickens for capture", function() {
    chickenPen.chickens[0].speed = 0;
    chickenPen.chickens[1].speed = 0;
    chickenPen.chickens[2].speed = 0;
    chickenPen.chickens[3].speed = 0;
    expect(chickenPen.hasChickensForCapture()).toBe(false);
  });

  it("should refresh Chickens", function() {
    chickenPen.chickens[0].scare = 0;
    chickenPen.chickens[1].scare = 0;
    chickenPen.chickens[2].scare = 0;
    chickenPen.chickens[3].scare = 0;

    chickenPen.refresh();

    expect(chickenPen.chickens[0].scare).toBe(1);
    expect(chickenPen.chickens[1].scare).toBe(3);
    expect(chickenPen.chickens[2].scare).toBe(3);
    expect(chickenPen.chickens[3].scare).toBe(2);

  });

  it("should scare all chickens", function() {
    chickenPen.scareChickens();
    
    expect(chickenPen.chickens[0].scare).toBe(0);
    expect(chickenPen.chickens[1].scare).toBe(2);
    expect(chickenPen.chickens[2].scare).toBe(2);
    expect(chickenPen.chickens[3].scare).toBe(1);
  });

});