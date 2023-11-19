// Subject interface
interface Image {
    display(): Promise<void>;
}

// Real Subject
class RealImage implements Image {
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
        this.loadImageFromServer();
    }

    private async loadImageFromServer(): Promise<void> {
        return new Promise((resolve) => {
            // Simulate async loading from server
            setTimeout(() => {
                console.log(`Image loaded from server: ${this.filename}`);
                resolve();
            }, 2000);
        });
    }

    async display(): Promise<void> {
        console.log(`Displaying image: ${this.filename}`);
        // Simulate displaying image
    }
}

// Virtual Proxy
class ImageProxy implements Image {
    private realImage: RealImage | null = null;
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
    }

    async display(): Promise<void> {
        if (!this.realImage) {
            this.realImage = new RealImage(this.filename);
            await this.realImage.display();
        } else {
            await this.realImage.display();
        }
    }
}

// Client Code
async function main() {
    const imageProxy = new ImageProxy("example.jpg");

    console.log("Attempting to display image...");
    await imageProxy.display(); // The first time this will load the image asynchronously
    console.log("Image displayed.");

    console.log("Attempting to display image again...");
    await imageProxy.display(); // This time it will reuse the loaded image
    console.log("Image displayed again.");
}

main();
