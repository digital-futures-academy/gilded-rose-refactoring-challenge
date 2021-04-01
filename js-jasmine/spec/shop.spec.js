const Item = require('../src/item.js')
const Shop = require('../src/shop.js')
const AgedBrie= require ('../src/agedbrie.js')


describe ('Test', function(){
  it('testing aged brie item',function(){
    item = new Item('Aged Brie', 5, 8)
    shop = new Shop([item])
    result = shop.updateQuality()
    expect(result[0].quality).toEqual(9)
  })
    it('testing sulfuras',function(){
    item = new Item('Aged Brie', 5, 8)
    item2  = new Item ("Sulfuras, Hand of Ragnaros", 5, 60)
    shop = new Shop([item,item2])
    result = shop.updateQuality()
    expect(result[1].quality).toEqual(80)
  })
    it('testing conjured item',function(){
    item = new Item("Conjured", 5, 40)
    shop = new Shop([item])
    shop.updateQuality()
    shop.updateQuality()
    result = shop.updateQuality()
    expect(result[0].quality).toEqual(34)
  })
    it('testing ordinary',function(){
    item = new Item("Ordinary", 5, 40)
    shop = new Shop([item])
    shop.updateQuality()
    shop.updateQuality()
    result = shop.updateQuality()
    expect(result[0].sellIn).toEqual(2)
  })
})
