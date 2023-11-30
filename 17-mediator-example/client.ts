import { ConcreteMediator } from "./concrete-mediator";
import { Product, User } from "./entities";
import { Mediator } from "./mediator";


const mediator:Mediator = new ConcreteMediator();

const user = new User({ name: "John Doe", id: 1 });
const products: Product[] = [
  new Product({ name: "Laptop", price: 1500 }),
  new Product({ name: "Headphones", price: 500 }),
  new Product({ name: "Keyboard", price: 100 }),
];

mediator.placeOrder(user, products);
mediator.getUserActivity(user);