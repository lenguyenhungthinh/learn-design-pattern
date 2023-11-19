interface LegacyPaymentSystem {
    initiatePayment(amount: number): void;
}

class OldPaymentSystem implements LegacyPaymentSystem {
    initiatePayment(amount: number): void {
        console.log(`Initiating a payment of ${amount} VND with old system.`);
    }
}

interface ModernPaymentSystem {
    pay(amountInDollars: number): void;
}

class NewPaymentSystem implements ModernPaymentSystem {
    pay(amountInDollars: number): void {
        console.log(`Paying ${amountInDollars}$ with new system.`);
    }
}

class AdapterForOldSystem  extends  OldPaymentSystem implements ModernPaymentSystem{
    pay(amountInDollars: number): void {
        this.initiatePayment(amountInDollars * 23000);
    }
}

class ECommerceSystem {
    private paymentSystem: NewPaymentSystem;

    constructor(paymentSystem: NewPaymentSystem) {
        this.paymentSystem = paymentSystem;
    }

    makePayment(amount: number): void {
        this.paymentSystem.pay(amount);
    }
}

const oldSystemWithAdapter = new AdapterForOldSystem();
const newSystem = new NewPaymentSystem();
let ecommerce = new ECommerceSystem(oldSystemWithAdapter);
ecommerce.makePayment(1000000);
ecommerce = new ECommerceSystem(newSystem);
ecommerce.makePayment(1000000);
