import { User, Product, Order } from "../entities";
import { Mediator } from "../mediator";

export class OrderManager {
  constructor(private mediator: Mediator) { }

  placeOrder(user: User, products: Product[],): void {
    const order = new Order({
      user: user,
      products: products,
      id: Math.floor(Math.random() * 1000),
    });

    console.log(`Order placed for ${user.name}`);
    this.mediator.applyPromotions(order, "DISCOUNT_10");
    console.log(`Order applied promotions for ${user.name}`);
  }
}

