var {Shop, Item} = require('../src/gilded_rose.js');

describe('Checking item class', function() {
  it('Checking that the name of the item is correct', function() {
    const gildedRose = new Shop([ new Item("Wine", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Wine");
  });

});

describe("Checking lowerValue() method", function() {
  it('Checking that in a regular item the quality value has been decreased by 1', function() {
    const gildedRose = new Shop([ new Item('Wine', 10, 30) ]);
    const items = gildedRose.lowerValue();
    expect(items[0].quality).toEqual(29);

  });

  it('Checking that in a regular item the sellIn value has been decreased by 1', function() {
    const gildedRose = new Shop([ new Item('Wine', 10, 30) ]);
    const items = gildedRose.lowerValue();
    expect(items[0].sellIn).toEqual(9);
  });

  it('Checking that when sellIn is less than 0, quality decreases by 2', function () {
    const gildedRose = new Shop([ new Item('Wine', -1, 30) ]);
    const items = gildedRose.lowerValue();
    expect(items[0].quality).toEqual(28); 
  })
});