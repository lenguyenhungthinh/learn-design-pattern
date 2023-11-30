import { User, Product, Order } from "./entities";
import { OrderManager, PromotionManager, UserManager } from "./manager";
import { Mediator } from "./mediator";

export class ConcreteMediator implements Mediator {
  private _promotionManager: PromotionManager;
  private _userManager: UserManager;
  private _orderManager: OrderManager;

  constructor() {
    this._promotionManager = new PromotionManager(this);
    this._userManager = new UserManager(this);
    this._orderManager = new OrderManager(this);
  }

  placeOrder(user: User, products: Product[]): void {
    console.log(`Mediator received order from ${user.name}`);
    this._orderManager.placeOrder(user, products);
  }

  applyPromotions(order: Order, promotionCode: string): void {
    console.log(`Mediator received promotion ${promotionCode} for order ${order.id}`);
    this._promotionManager.applyPromotion(order, promotionCode);
  }

  getUserActivity(user: User): void {
    console.log(`Mediator received user activity from ${user.name}`);
    this._userManager.getUserActivity(user);
  }
}