// Abstract Factory: GraphicFactory
interface GraphicFactory {
    createObject(): GraphicObject;
    createLighting(): Lighting;
}

// Concrete Factory for 2D graphics
class TwoDGraphicFactory implements GraphicFactory {
    createObject(): GraphicObject {
        return new TwoDObject();
    }

    createLighting(): Lighting {
        return new TwoDLighting();
    }
}

// Concrete Factory for 3D graphics
class ThreeDGraphicFactory implements GraphicFactory {
    createObject(): GraphicObject {
        return new ThreeDObject();
    }

    createLighting(): Lighting {
        return new ThreeDLighting();
    }
}

// Abstract Product: GraphicObject
interface GraphicObject {
    draw(): void;
}

// Concrete Product for 2D graphics
class TwoDObject implements GraphicObject {
    draw(): void {
        console.log("Drawing a 2D object");
    }
}

// Concrete Product for 3D graphics
class ThreeDObject implements GraphicObject {
    draw(): void {
        console.log("Drawing a 3D object");
    }
}

// Abstract Product: Lighting
interface Lighting {
    apply(): void;
}

// Concrete Product for 2D lighting
class TwoDLighting implements Lighting {
    apply(): void {
        console.log("Applying 2D lighting");
    }
}

// Concrete Product for 3D lighting
class ThreeDLighting implements Lighting {
    apply(): void {
        console.log("Applying 3D lighting");
    }
}

// Client code
const twoDFactory: GraphicFactory = new TwoDGraphicFactory();
const twoDObject: GraphicObject = twoDFactory.createObject();
const twoDLighting: Lighting = twoDFactory.createLighting();

twoDObject.draw();
twoDLighting.apply();

const threeDFactory: GraphicFactory = new ThreeDGraphicFactory();
const threeDObject: GraphicObject = threeDFactory.createObject();
const threeDLighting: Lighting = threeDFactory.createLighting();

threeDObject.draw();
threeDLighting.apply();
