class Computer {
    private ram: number;
    private cpu: string;
    private storage: number;
    private gpu: string;

    constructor(cpu: string, ram: number, storage: number, gpu: string) {
        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
        this.gpu = gpu;
    }

    showSpecs(): void {
        console.log(`Specs: CPU - ${this.cpu}, RAM - ${this.ram}GB, Storage - ${this.storage}GB, GPU - ${this.gpu}`);
    }
}

interface ComputerBuilder {
    setRam(ram: number): void;
    setCpu(cpu: string): void;
    setStorage(storage: number): void;
    setGpu(gpu: string): void;
    buildComputer(): Computer;
}

class GamingComputerBuilder implements ComputerBuilder {
    private ram: number = 0;
    private cpu: string = "";
    private storage: number = 0;
    private gpu: string = "";

    setRam(ram: number): void {
        this.ram = ram;
    }
    setCpu(cpu: string): void {
        this.cpu = cpu;
    }
    setStorage(storage: number): void {
        this.storage = storage;
    }
    setGpu(gpu: string): void {
        this.gpu = gpu;
    }
    buildComputer(): Computer {
        return new Computer(this.cpu, this.ram, this.storage, this.gpu);
    }    
}

// Director class
class ComputerEngineer {
    private builder: ComputerBuilder;

    constructor(builder: ComputerBuilder) {
        this.builder = builder;
    }

    constructComputer(): Computer {
        this.builder.setCpu("Intel i9");
        this.builder.setRam(32);
        this.builder.setStorage(1000);
        this.builder.setGpu("NVIDIA RTX 3080");
        return this.builder.buildComputer();
    }
}

// Client code
const gamingComputerBuilder = new GamingComputerBuilder();
const computerEngineer = new ComputerEngineer(gamingComputerBuilder);

const gamingComputer = computerEngineer.constructComputer();
gamingComputer.showSpecs();
