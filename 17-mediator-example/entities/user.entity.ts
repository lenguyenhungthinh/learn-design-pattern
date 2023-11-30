export class User {
  id?: number;
  name?: string;
  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}