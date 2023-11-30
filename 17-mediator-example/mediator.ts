import { User, Product, Order } from "./entities";

export interface Mediator {
  placeOrder(user: User, products: Product[]): void;
  applyPromotions(order: Order, promotionCode: string): void;
  getUserActivity(user: User): void;
}