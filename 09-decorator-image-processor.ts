// ImageProcessor interface
interface ImageProcessor {
    process(): string;
}

class BasicImageProcessor implements ImageProcessor {
    constructor(private image: string) {}

    process(): string {
        return this.image;
    }
}

abstract class ImageDecorator implements ImageProcessor {
    constructor(protected imageProcessor: ImageProcessor) {
    }
    process(): string {
        return this.imageProcessor.process();
    }
}


class BlackAndWhiteImageDecorator extends ImageDecorator {
    process(): string {
        return super.process() + ' with black and white';
    }
}

class BlurImageDecorator extends ImageDecorator {
    process(): string {
        return super.process() + ' with blur';
    }
}

const image = 'An Image in Sea Beach';
const basicImageProcessor = new BasicImageProcessor(image);
console.log(basicImageProcessor.process());

const blackAndWhiteImageProcessor = new BlackAndWhiteImageDecorator(basicImageProcessor);
console.log(blackAndWhiteImageProcessor.process());

const blurImageProcessor = new BlurImageDecorator(basicImageProcessor);
console.log(blurImageProcessor.process());