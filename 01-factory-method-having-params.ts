interface MyShape {
  draw(): string;
}

class MyCircle implements MyShape {
  constructor(
    private radius: number,
    private x: number,
    private y: number,
    private color: string,
    private opacity: number,
    private borderWeight: number) {
  }
  draw(): string {
    return `Draw Circle: radius: ${this.radius}, x: ${this.x}, y: ${this.y}, color: ${this.color}, opacity: ${this.opacity}, borderWeight: ${this.borderWeight}`;
  }
}

class MyRectangle implements MyShape {
  constructor(
    private width: number,
    private height: number,
    private x: number,
    private y: number,
    private color: string,
    private opacity: number,
    private borderWeight: number) {
  }
  draw(): string {
    return `Draw Rectangle: width: ${this.width}, height: ${this.height}, x: ${this.x}, y: ${this.y}, color: ${this.color}, opacity: ${this.opacity}, borderWeight: ${this.borderWeight}`;
  }
}

interface MyShapeFactory {
  createShape(param: {[key: string]: number | string}): MyShape;
}

class MyCircleFactory implements MyShapeFactory {
  createShape(param: {[key: string]: number | string}): MyShape {
    const { radius, x, y, color, opacity, borderWeight } = param;
    return new MyCircle(radius as number, x as number, y as number, color as string, opacity as number, borderWeight as number);
  }
}

class RectangleFactory {
  createShape(param: {[key: string]: number | string}): MyShape {
    const { width, height, x, y, color, opacity, borderWeight } = param;
    return new MyRectangle(width as number, height as number, x as number, y as number, color as string, opacity as number, borderWeight as number);
  }  
}

const myCircleFactory = new MyCircleFactory();
const myCircle = myCircleFactory.createShape({ radius: 10, x: 0, y: 0, color: 'red', opacity: 1, borderWeight: 1 });
console.log(myCircle.draw());

const myRectangleFactory = new RectangleFactory();
const myRectangle = myRectangleFactory.createShape({ width: 10, height: 20, x: 0, y: 0, color: 'red', opacity: 1, borderWeight: 1 });
console.log(myRectangle.draw());