export class Product {
  id?: number;
  name?: string;
  price?: number;
  constructor(init?: Partial<Product>) {
    Object.assign(this, init);
  }
}