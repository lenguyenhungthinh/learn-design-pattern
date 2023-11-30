import { Product } from "./product.entity";
import { User } from "./user.entity";

export class Order {
  id?: number;
  user?: User;
  products: Product[] = [];
  constructor(init?: Partial<Order>) {
    Object.assign(this, init);
  }
}