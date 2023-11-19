class Item {
    constructor(public name: string, public price: number) { }
}

interface IAbstractIterator {
    first(): Item;
    next(): Item;
    isDone(): boolean;
    currentItem(): Item;
    step(): number;
}

interface IAbstractCollection {
    createIterator(): IAbstractIterator;
    getItems(): Item[];
}


class MyIterator implements IAbstractIterator {
    private stepIndex: number = 0;
    private bu = 4;
    private currentBu = 0;
    constructor(private collection: IAbstractCollection) { }

    first(): Item {
        this.stepIndex = 0;
        return this.collection.getItems()[this.stepIndex];
    }

    next(): Item {
        const length = this.collection.getItems()?.length;
        if (length === undefined) {
            throw new Error('Collection is empty');
        }
        [this.stepIndex, this.currentBu] = this.calculateIndex(length, this.stepIndex, this.currentBu);
        return this.collection.getItems()[this.stepIndex];
    }

    isDone(): boolean {
        return this.stepIndex >= this.collection.getItems().length;
    }

    currentItem(): Item {
        return this.collection.getItems()[this.stepIndex];
    }

    step(): number {
        return this.stepIndex;
    }

    private calculateIndex(length: number, stepIndex: number, bu: number): [number, number] {
        if (bu === 0) {
            if (length - stepIndex < this.bu + 1) {
                stepIndex++;
            } else {
                stepIndex += 3;
                bu++;
            }
        } else if (bu === 1) {
            stepIndex -= 2;
            bu++;

        } else if (bu === 2) {
            stepIndex += 1;
            bu++;

        } else if (bu === 3) {
            stepIndex += 2;
            bu++;

        }

        bu = bu % this.bu;
        return [stepIndex, bu];

    }

}


class Collection implements IAbstractCollection {
    constructor(private items: Item[] = []) {
        this.items = items;
    }

    createIterator(): IAbstractIterator {
        return new MyIterator(this);
    }

    getItems(): Item[] {
        return this.items;
    }

    public count(): number {
        return this.items.length;
    }

    public getByIndex(index: number): Item {
        return this.items[index];
    }
}

// Usage
console.log('Iterator Pattern Demonstration');
const items: Item[] = [];
for (let i = 0; i < 20; i++) {
    items.push(new Item(`Item ${i}`, i * 100));
}

const collection = new Collection(items);

const iterator = collection.createIterator();

while (!iterator.isDone()) {
    console.log(iterator.currentItem());
    iterator.next();
}

// Output