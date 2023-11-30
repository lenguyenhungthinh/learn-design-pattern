interface ECommerceObserver {
  id: string;
  update(message: string): void;
}


class EmailObserver implements ECommerceObserver {
  id: string;

  constructor(private email:string, id: string ) {
    this.id = id;
  }
  
  update(message: string): void {
    console.log(`Email to ${this.email}: ${message}`);
  }
}

class MobileObserver implements ECommerceObserver {
  id: string;
  constructor(private mobile:string, id: string ) {
    this.id = id;
  }
  
  update(message: string): void {
    console.log(`Mobile to ${this.mobile}: ${message}`);
  }
}

class EcommerceStore {
  private observers: ECommerceObserver[] = [];
  
  public addObserver(observer: ECommerceObserver): void {
    this.observers.push(observer);
  }
  
  public removeObserver(observer: ECommerceObserver): void {
    this.observers = this.observers.filter(obs => obs.id !== observer.id);
  }
  
  public notifyObservers(message: string): void {
    this.observers.forEach(observer => observer.update(message));
  }
}

const store = new EcommerceStore();

const emailObserver = new EmailObserver('johnExample@example.com', '1');
const emailObserver2 = new EmailObserver('johnExample2@example.com', '2');
const mobileObserver = new MobileObserver('123456789', '3');
const mobileObserver2 = new MobileObserver('123456788', '4');
//continue
store.addObserver(emailObserver);
store.addObserver(emailObserver2);
store.addObserver(mobileObserver);
store.addObserver(mobileObserver2);

store.notifyObservers('Hello World');
