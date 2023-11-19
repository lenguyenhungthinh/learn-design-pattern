interface ContactPrototype {
    clone(): ContactPrototype;
}

class Contact implements ContactPrototype {
    private name: string;
    private email: string;
    private phoneNumber: string;

    constructor(name: string, email: string, phoneNumber: string) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    clone() {
        // 1. shallow copy
        // return Object.assign({}, this) // shallow copy
        // 2. Spread
        // return {...this};
        // 3. Object.assign Properties: Yes, Methods: No, Deep Copy: No
        // var clone = Object.assign({}, customer);
        // 4. JSON.parse(JSON.stringify(this)); //deep copy - no method

        // 5. deep copy, new Function, Object.create
        return new Contact(this.name, this.email, this.phoneNumber);
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }

    getPhoneNumber(): string {
        return this.phoneNumber;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}, Email: ${this.email}, Phone Number: ${this.phoneNumber}`);
    }
}

const original = new Contact("John Doe", "join-doe@gmail.com" ,"123-456-7890");

//clone1
const cloneContact1 = original.clone();

console.log('same? ', original == cloneContact1)
console.log('same construct? ', original === cloneContact1)
cloneContact1.displayInfo();

