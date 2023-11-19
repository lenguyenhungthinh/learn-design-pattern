interface Jewelry {
    getDescription(): string;
    getPrice(): number;
}

class DiamondRing implements Jewelry {
    getPrice(): number {
        return 5000;
    }
    getDescription(): string {
        return 'Diamond Ring';
    }
}

class GoldNecklace implements Jewelry {
    getPrice(): number {
        return 1000;
    }
    getDescription(): string {
        return 'Gold Necklace';
    }
}

abstract class JewelryDecorator implements Jewelry {
    constructor(protected jewelry: Jewelry) {
    }
    getPrice(): number {
        return this.jewelry.getPrice();
    }
    getDescription(): string {
        return this.jewelry.getDescription();
    }
}

class GoldBaseJewelry extends JewelryDecorator {
    getPrice(): number {
        return super.getPrice() + 500;
    }
    getDescription(): string {
        return super.getDescription() + ' with gold base!';
    }
}

class PlatinumBaseJewelry extends JewelryDecorator {
    getPrice(): number {
        return super.getPrice() + 1000;
    }
    getDescription(): string {
        return super.getDescription() + ' with platinum base!';
    }
}

const simpleRing = new DiamondRing();
console.log(`Description: ${simpleRing.getDescription()}, Price: ${simpleRing.getPrice()}`);

const goldBaseSimpleRing = new GoldBaseJewelry(simpleRing);
console.log(`Description: ${goldBaseSimpleRing.getDescription()}, Price: ${goldBaseSimpleRing.getPrice()}`);

const platinumBaseSimpleRing = new PlatinumBaseJewelry(simpleRing);
console.log(`Description: ${platinumBaseSimpleRing.getDescription()}, Price: ${platinumBaseSimpleRing.getPrice()}`);

const simpleNecklace = new GoldNecklace();
console.log(`Description: ${simpleNecklace.getDescription()}, Price: ${simpleNecklace.getPrice()}`);

const goldBaseSimpleNecklace = new GoldBaseJewelry(simpleNecklace);
console.log(`Description: ${goldBaseSimpleNecklace.getDescription()}, Price: ${goldBaseSimpleNecklace.getPrice()}`);
