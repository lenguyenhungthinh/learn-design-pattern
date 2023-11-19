class ComplexSingleton {
    private static instance: ComplexSingleton | null = null;

    // Private constructor to prevent instantiation
    private constructor() {}

    // Lazy initialization - create an instance only if needed
    public static getInstance(): ComplexSingleton {
        if (!ComplexSingleton.instance) {
            ComplexSingleton.instance = new ComplexSingleton();
            // Additional setup and initialization can be done here
        }
        return ComplexSingleton.instance;
    }

    // Example method
    public performOperation(): void {
        console.log("ComplexSingleton is performing an operation.");
    }

    // Example property
    public getData(): string {
        return "Data from ComplexSingleton";
    }
}

// Usage
const singletonInstance1 = ComplexSingleton.getInstance();
const singletonInstance2 = ComplexSingleton.getInstance();

console.log(singletonInstance1 === singletonInstance2); // Output: true

singletonInstance1.performOperation(); // Output: ComplexSingleton is performing an operation.
console.log(singletonInstance2.getData()); // Output: Data from ComplexSingleton
