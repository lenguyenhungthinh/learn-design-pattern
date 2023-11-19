interface LegacyPaymentSystem2 {
    initiatePayment(amount: number): void;
}

class OldPaymentSystem2 implements LegacyPaymentSystem2 {
    initiatePayment(amount: number): void {
        console.log(`Initiating a payment of ${amount} VND with old system.`);
    }
}

interface ModernPaymentSystem2 {
    pay(amountInDollars: number): void;
}

class NewPaymentSystem2 implements ModernPaymentSystem {
    pay(amountInDollars: number): void {
        console.log(`Paying ${amountInDollars}$ with new system.`);
    }
}

class AdapterForOldSystem2  implements ModernPaymentSystem{
    private legacySystem: LegacyPaymentSystem;
    constructor(legacySystem: LegacyPaymentSystem) {
        this.legacySystem = legacySystem;
    }
    pay(amountInDollars: number): void {
        this.legacySystem.initiatePayment(amountInDollars * 23000);
    }
}

class ECommerceSystem2 {
    private paymentSystem: NewPaymentSystem2;

    constructor(paymentSystem: NewPaymentSystem2) {
        this.paymentSystem = paymentSystem;
    }

    makePayment(amount: number): void {
        this.paymentSystem.pay(amount);
    }
}

const adapter2 = new AdapterForOldSystem2(new OldPaymentSystem2);
const newSystem2 = new NewPaymentSystem2();
let ecommerce2 = new ECommerceSystem2(adapter2);
ecommerce2.makePayment(1000000);
ecommerce2 = new ECommerceSystem2(newSystem2);
ecommerce2.makePayment(1000000);
