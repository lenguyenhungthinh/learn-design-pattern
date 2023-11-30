abstract class Itransporter {
  protected transportMethod: TransportMethod | null = null;

  abstract deliver(): void;
  public setTransportMethod(transportMethod: TransportMethod): void {
    this.transportMethod = transportMethod;
  }
}

interface TransportMethod {
  moving(): void;
}

class Flying implements TransportMethod {
  moving() {
    console.log("I'm flying");
  }
}

class Walking implements TransportMethod {
  moving() {
    console.log("I'm walking");
  }
}

class Carrying implements TransportMethod {
  moving() {
    console.log("I'm carrying");
  }
}

class Airplane extends Itransporter {

  constructor(transportMethod: TransportMethod) {
    super();
    this.transportMethod = transportMethod;
  }

  deliver() {
    console.log("I'm a airplane");
    if (!this.transportMethod) throw new Error("Transport method not set");
    this.transportMethod.moving();
  }
}

class Truck extends Itransporter {

  constructor(transportMethod: TransportMethod) {
    super();
    this.transportMethod = transportMethod;
  }

  deliver() {
    console.log("I'm a truck");
    if (!this.transportMethod) throw new Error("Transport method not set");
    this.transportMethod.moving();
  }
}

class AirplaneFactory {
  static create() {
    return new Airplane(new Flying());
  }
}

class TruckFactory {
  static create() {
    return new Truck(new Carrying());
  }
}

const airplane = AirplaneFactory.create();
const truck = TruckFactory.create();

airplane.deliver();
truck.deliver();


airplane.setTransportMethod(new Walking());
truck.setTransportMethod(new Walking());
truck.deliver();
airplane.deliver();


