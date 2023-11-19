interface Image2 {
    display(): void;
}

class RealImage2 implements Image2 {
    isLoaded: boolean = false;
    constructor(private filename:string) {}
    async loadImage2FromServer(): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`Loaded image ${this.filename} from server`);
                this.isLoaded = true;
                resolve();
            }, 1000);
        });
    }
    async display(): Promise<void> {
        if (!this.isLoaded) {
            await this.loadImage2FromServer();
        }
        console.log(`Displaying Image22: ${this.filename}`);
    }
}

class Image2Proxy implements Image2 {
    private realImage2: RealImage2 | null = null;
    
    constructor(private filename:string) {}

    async display(): Promise<void> {
        if (!this.realImage2) {
            this.realImage2 = new RealImage2(this.filename);
        }
        await this.realImage2.display();
    }
}

async function main2() {
    const image = new Image2Proxy('abc.jpg');
    console.log("Attempting to display Image2...");
    await image.display();

    console.log("Attempting to display Image2 second time...");
    await image.display();
}

main2();