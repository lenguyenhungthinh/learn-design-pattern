interface BankAccount {
    getBalance(user: string): Promise<number>;
}

class RealBankAccount implements BankAccount {
    private balance: {[key: string]: number} = {};
    constructor() {
        this.balance['A'] = 1000;
        this.balance['B'] = 2000;
        this.balance['C'] = 3000;
        this.balance['D'] = 3000;
    }

    async getBalance(user: string): Promise<number> {
        //get balance from database
        return this.balance[user] || 0;
    }
}

class BankAccountProxy implements BankAccount {
    private realBankAccount: RealBankAccount | null = null;
    private allowedUsers: string[] = ['A', 'B', 'C'];
    constructor() {
    }

    async getBalance(user: string): Promise<number> {
        if(this.allowedUsers.includes(user)) {
            if(!this.realBankAccount) {
                this.realBankAccount = new RealBankAccount();
            }
            return this.realBankAccount.getBalance(user);
        } else {
            console.log(`User ${user} is not allowed to access bank account`);
            return 0;
        }
    }
}

async function mainBankExample() {
    const bankAccount = new BankAccountProxy();
    console.log(`Balance for Z: $${ await bankAccount.getBalance('Z')}`);
    console.log(`Balance for A: $${ await bankAccount.getBalance('A')}`);
    console.log(`Balance for B: $${ await bankAccount.getBalance('B')}`);
    console.log(`Balance for C: $${ await bankAccount.getBalance('C')}`);
    console.log(`Balance for D: $${ await bankAccount.getBalance('D')}`);
}

mainBankExample();