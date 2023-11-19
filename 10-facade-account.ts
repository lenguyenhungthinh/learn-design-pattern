let balance = 5000;

class AccountManager {
    public createAccount(name: string, email: string, password: string): void {
        console.log(`Account created for ${name} with email ${email} and password ${password}`);
    }

    public deleteAccount(email: string): void {
        console.log(`Account with email ${email} deleted`);
    }

    public checkBalance(accountId: string): number {
        // random balance
        return balance;
    }

    public deposit(accountId: string, amount: number): boolean {
        // random true/false
        balance += amount;
        return true;
    }

    public withdraw(accountId: string, amount: number): boolean {
        if(balance < amount) {
            return false;
        } 
        balance -= amount;
        return true;
    }
}

class NotificationService {
    public sendEmail(email: string, content: string): void {
        console.log(`Email sent to ${email}, content: ${content}`);
    }

    public sendSMS(phoneNumber: string, content: string): void {
        console.log(`SMS sent to ${phoneNumber}, content: ${content}`);
    }
}

class BankingFacade {
    constructor(private accountManager: AccountManager, private notificationService: NotificationService) { }
    createAccount(name: string, email: string, password: string): void {
        this.accountManager.createAccount(name, email, password);
        const message = `Your account has been created with email ${email}`;
        this.notificationService.sendEmail(email, message);
    }

    deposit(accountId: string, amount: number): void {
        const isSuccess = this.accountManager.deposit(accountId, amount);
        const newBalance = this.accountManager.checkBalance(accountId); 
        if(isSuccess) {
            const message = `Your account has been deposited with amount ${amount}, your new balance is ${newBalance}`;
            this.notificationService.sendEmail('email', message);
        } else {
            const message = `Your account has been deposited with amount ${amount}, your new balance is ${newBalance}`;
            this.notificationService.sendEmail('phoneNumber', message);
        }
    }

    checkBalance(accountId: string): void {
        const balance = this.accountManager.checkBalance(accountId);
        const message = `Your balance is ${balance}`;
        this.notificationService.sendEmail('email', message);
    }

    withdraw(accountId: string, amount: number): void {
        const isSuccess = this.accountManager.withdraw(accountId, amount);
        const newBalance = this.accountManager.checkBalance(accountId); 
        if(isSuccess) {
            const message = `Your account has been withdrawn with amount ${amount}, your new balance is ${newBalance}`;
            this.notificationService.sendEmail('email', message);
        } else {
            const message = `withdraw failed, your balance is ${newBalance}`;
            this.notificationService.sendEmail('email', message);
        }
    }
}

const accountManager = new AccountManager();
const notificationService = new NotificationService();
const bankingFacade = new BankingFacade(accountManager, notificationService);

bankingFacade.createAccount('hung le nguyen', 'email@gmail.com', '123456');
bankingFacade.deposit('accountId', 100);
bankingFacade.checkBalance('accountId');
bankingFacade.withdraw('accountId', 100);
bankingFacade.withdraw('accountId', 1000000);
