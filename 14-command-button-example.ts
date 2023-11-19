abstract class UiCommand
{
    abstract execute(): void;
}

abstract class Button
{
    constructor(protected command: UiCommand) {}

    abstract click(): void;
}

// Commands
class PrintCommand extends UiCommand
{
    execute(): void {
        console.log('Print command executed');
    }
}

// Commands
class SaveCommand extends UiCommand
{
    execute(): void {
        console.log('Save command executed');
    }
}

// Commands
class OpenCommand extends UiCommand
{
    execute(): void {
        console.log('Open command executed');
    }
}

// Invoker
class UiButton extends Button
{
    click(): void {
        this.command.execute();
    }
}

const saveButton = new UiButton(new SaveCommand());
const printButton = new UiButton(new PrintCommand());
const openButton = new UiButton(new OpenCommand());

saveButton.click();
printButton.click();
openButton.click();