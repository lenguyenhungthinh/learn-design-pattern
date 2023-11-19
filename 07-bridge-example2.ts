


interface Account {
    openAccount():string;
}

class SavingAccount implements Account {
    openAccount(): string {
        return ' opening saving account';
    }

}

class CheckingAccount implements Account {
    openAccount(): string {
        return ' opening checking account';
    }
}

abstract class Bank {
    constructor(protected account: Account) {
    }
    public abstract openAccount(): string
}


class VietComBank extends Bank {
    public openAccount(): string {
        return 'you are opening' + this.account?.openAccount() + ' at VietComBank!';
    }
    
}

class TechcomBank extends Bank {
    public openAccount(): string {
        return 'you are opening' + this.account?.openAccount() + ' at Techcombank!';
    }
}

const account = new CheckingAccount();
const bankAccount = new VietComBank(account);
const openResult = bankAccount.openAccount();
console.log(openResult);
