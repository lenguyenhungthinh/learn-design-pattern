// The calculator:
class Calculator 
{
    private current: number = 0;

    public operation(operation:string, operad:number) {
        switch (operation) {
            case '+': this.current += operad; break;        
            case '-': this.current -= operad; break;        
            case '*': this.current *= operad; break;        
            case '/': this.current /= operad; break;
        }
        console.log(`Current value = ${this.current} (following ${operation} ${operad})`)
    }
}

//The command interface:
abstract class Command {
    public abstract execute():void;
    public abstract unexecute():void;
}

//Real command
class CalculatorCommand extends Command {
    public operation: string ;
    public operand: number;
    public calculator: Calculator;
    constructor(calculator: Calculator, operation: string, operand: number) {
        super();
        this.calculator = calculator;
        this.operand = operand;
        this.operation = operation;
    }

    public override execute(): void {
        this.calculator.operation(this.operation, this.operand);
    }

    public override unexecute(): void {
        this.calculator.operation(this.getUndoOperation(), this.operand);
    }

    private getUndoOperation() {
        switch (this.operation) {
            case '+': return '-';
            case '-': return '+';
            case '*': return '/';
            case '/': return '*';
            default: throw new  DOMException("@operator");
        }
    }
    
}

//Invoker
class User
{
    private calculator = new Calculator();
    private commands: Command[] = [];
    private current = 0;

    
    public redo(levels: number) {
        console.log(`\n---- Redo ${levels} levels `);
        for(let i = 0; i < levels; i++) {
            if(this.current < this.commands.length - 1) {
                const command = this.commands[this.current++];
                command.execute();
            }    
        }
    }

    public undo(levels: number) {
        console.log(`\n---- Undo ${levels} levels `);
        for(let i = 0; i < levels; i++) {
            if(this.current > 0) {
                const command = this.commands[--this.current];
                command.unexecute();
            }    
        }
    }

    public compute(operator: string, operand: number) {
        //DO operation
        const command = new CalculatorCommand(this.calculator, operator, operand);
        command.execute();
        
        //Add commands to list
        this.commands.push(command);
        this.current++;
    }
}

const user = new User();
user.compute('+', 100);
user.compute('-', 50);
user.compute('*', 10);
user.compute('/', 2);

user.undo(4);
user.redo(3);