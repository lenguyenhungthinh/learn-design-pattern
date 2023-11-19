

abstract class GiftBase {
    protected name: string = '';
    protected price: number = 0;
    constructor(_name: string, _price: number) {
        this.name = _name;
        this.price = _price;
    }

    public abstract calculateTotalPrice(): number;
}

class SingleGift extends GiftBase {
    public calculateTotalPrice(): number {
        console.log(`${this.name} with the price ${this.price}`);
        return this.price;
    }
}

class CompositeGift extends GiftBase {
    private gifts: GiftBase[] = [];

    public add(gift: GiftBase) {
        this.gifts.push(gift);
    }

    public remove (gift: GiftBase) {
        const index = this.gifts.indexOf(gift);
        if(index === -1) {
            return;
        }
        this.gifts = this.gifts.slice(index, 1);
    }
    public calculateTotalPrice(): number {
        let total = 0;
        for (const gift of this.gifts) {
            total += gift.calculateTotalPrice();
        }
        return total;
    }
}

const phone = new SingleGift('Phone', 256);

const rootBox = new CompositeGift('RootBox', 0);
const tructToy = new SingleGift('Truck toy', 289);
const plainToy = new SingleGift('Plain toy', 587);
rootBox.add(tructToy);
rootBox.add(plainToy);

const childBox = new CompositeGift("ChildBox", 0);
const soldierToy = new SingleGift("SoldierToy", 200);
childBox.add(soldierToy);
rootBox.add(childBox);
console.log(rootBox.calculateTotalPrice());