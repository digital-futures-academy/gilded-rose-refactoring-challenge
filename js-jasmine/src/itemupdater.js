class itemupdater{
    constructor(items=[]){
        this.items = items;
    }
    normalqualitysetting(){
        for (var i = 0; i < this.items.length; i++) {
          if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].quality > 0 && this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
          }else if (this.items[i].sellIn < 6 && this.items[i].quality < 50 && this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            this.items[i].quality = this.items[i].quality + 3;
          }else if (this.items[i].sellIn < 11 && this.items[i].quality < 50  && this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            this.items[i].quality = this.items[i].quality + 2;
          }else if (this.items[i].quality < 50 && this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
      updatesellin(){
        for (var i = 0; i < this.items.length; i++) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].sellIn = this.items[i].sellIn - 1;
          }
        }
      }
      nonsellingquality(){
        for (var i = 0; i < this.items.length; i++) {
          if(this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].quality > 0  && this.items[i].name != 'Sulfuras, Hand of Ragnaros' && this.items[i].name != 'Aged Brie' && this.items[i].sellIn < 0) {
            this.items[i].quality = this.items[i].quality - 1;
          }else if(this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].sellIn < 0) {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }else if (this.items[i].quality < 50 && this.items[i].sellIn < 0){
            this.items[i].quality = this.items[i].quality + 1;
          } 
        }
      }
}
module.exports = itemupdater