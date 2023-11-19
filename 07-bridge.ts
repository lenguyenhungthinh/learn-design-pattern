interface Renderer {
    renderShape(shape: string): void;
}

class VectorRenderer implements Renderer {
    renderShape(shape: string): void {
        console.log(`Drawing ${shape} as lines`);
    }
}

class RasterRenderer implements Renderer {
    renderShape(shape: string): void {
        console.log(`Drawing ${shape} as pixels`);
    }
}

abstract class Shape {
    constructor(protected renderer: Renderer) {
    }

    abstract draw(): void;
    abstract resize(factor: number): void;
}

class Circle extends Shape {
    constructor(renderer: Renderer, private radius: number) {
        super(renderer);
    }

    draw(): void {
        this.renderer.renderShape(`Circle of radius ${this.radius}`);
    }

    resize(factor: number): void {
        this.radius *= factor;
    }
}

class Square extends Shape {
    constructor(renderer: Renderer, private side: number) {
        super(renderer);
    }

    draw(): void {
        this.renderer.renderShape(`Square with side ${this.side}`);
    }

    resize(factor: number): void {
        this.side *= factor;
    }
}

const raster = new RasterRenderer();
const vector = new VectorRenderer();
const circle = new Circle(vector, 5);
circle.draw();

const square = new Square(raster, 10);
square.draw();