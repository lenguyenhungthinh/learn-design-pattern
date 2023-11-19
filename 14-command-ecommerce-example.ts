class EcommerceService {
    addToCart(productId: number): void {
        console.log(`Adding product to cart: ${productId}`);
    }

    removeFromCart(productId: number): void {
        console.log(`Removing product from cart: ${productId}`);
    }

    createOrder(): void {
        console.log('Creating order');
    }

    cancelOrder(): void {
        console.log('Cancelling order');
    }
}

interface ECommerceCommand {
    execute(): void;
    unexecute(): void;
}

class AddToCartCommand  implements ECommerceCommand
{
    constructor(private service: EcommerceService, private productId: number) {}

    execute(): void {
        this.service.addToCart(this.productId);

    }

    unexecute(): void {
        this.service.removeFromCart(this.productId);
    }
}

class CreateOrderCommand implements ECommerceCommand
{
    constructor(private service: EcommerceService) {}

    execute(): void {
        this.service.createOrder();
    }

    unexecute(): void {
        this.service.cancelOrder();
    }
}

class Invoker {
    private history: ECommerceCommand[] = [];
    constructor(private commands: ECommerceCommand[]) {}

    push(command: ECommerceCommand): void {
        this.commands.push(command);
    }

    execute(): void {
        if(!this.commands.length) 
            return;
        this.commands.forEach(command => command.execute());
        this.history.push(this.commands.pop()!);
    }

    unexecute(): void {
        if(!this.history.length) 
            return;
        const command = this.history.pop()!;
        command.unexecute();
    }
}

const service = new EcommerceService();
const addToCartCommand = new AddToCartCommand(service, 1);
const createOrderCommand = new CreateOrderCommand(service);
const invoker = new Invoker([addToCartCommand, createOrderCommand]);
invoker.execute();
invoker.unexecute();
invoker.execute();
invoker.unexecute();
invoker.execute();
invoker.unexecute();
