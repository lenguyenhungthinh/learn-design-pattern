interface IHandler
{
    successor?: IHandler;
    requestOrder(amount: number): void;
}

class MiniStorage implements IHandler {
    successor?: IHandler;
    requestOrder(amount: number): void {
        if(amount < 10) {
            console.log('Mini storage: I can handle less than 10 quantity. DONE!');
        } else
        {
            console.log('Mini storage: I received the request but I can not handle more than 10 quantity. Passed to Medium storage')
            if(this.successor) {
                this.successor.requestOrder(amount);
            }
        }
    }
}

class MediumStorage implements IHandler {
    successor?: IHandler;
    requestOrder(amount: number): void {
        if(amount < 50) {
            console.log('Medium storage: I can handle less than 50 quantity. DONE!');
        } else
        {
            console.log('Medium storage: I received the request but I can not handle more than 50 quantity. Passed to Big storage')
            if(this.successor) {
                this.successor.requestOrder(amount);
            }
        }
    }
}

class BigStorage implements IHandler {
    successor?: IHandler;
    requestOrder(amount: number): void {
        if(amount < 100) {
            console.log('Big storage: I can handle less than 100 quantity. DONE!');
        } else
        {
            console.log('Big storage: I received the request but I can not handle more than 100 quantity. Passed to Big storage')
            if(this.successor) {
                this.successor.requestOrder(amount);
            }
        }
    }
}

class FactoryStorage implements IHandler {
    successor?: IHandler;
    requestOrder(amount: number): void {
        console.log('Factory: I received the request. You will receice product from us');
    }
}

class ChainOfHandlers 
{
    private readonly mini = new MiniStorage();
    private readonly medium = new MediumStorage();
    private readonly big = new BigStorage();
    private readonly factory = new FactoryStorage();
    constructor() {
        this.mini.successor = this.medium;
        this.medium.successor = this.big;
        this.big.successor = this.factory;
    }

    handler(amount: number): void {
        this.mini.requestOrder(amount)
    }
}

const chain = new ChainOfHandlers();
chain.handler(9);
chain.handler(30);
chain.handler(70);
chain.handler(120);