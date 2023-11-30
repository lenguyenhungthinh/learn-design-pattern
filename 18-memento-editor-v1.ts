import { create } from "domain";

class Editor {
  private text: string;
  private cursorX: number;
  private cursorY: number;
  private selectionWidth: number;
  private selectionHeight: number;

  constructor() {
    this.text = '';
    this.cursorX = 0;
    this.cursorY = 0;
    this.selectionWidth = 0;
    this.selectionHeight = 0;
  }

  public setText(text: string): void {
    this.text = text;
  }

  public getText(): string {
    return this.text;
  }

  public setCursor(x: number, y: number): void {
    this.cursorX = x;
    this.cursorY = y;
  }

  public getCursor(): { x: number, y: number } {
    return { x: this.cursorX, y: this.cursorY };
  }

  public setSelection(width: number, height: number): void {
    this.selectionWidth = width;
    this.selectionHeight = height;
  }

  public getSelection(): { width: number, height: number } {
    return { width: this.selectionWidth, height: this.selectionHeight };
  }

  public createSnapshot(): SnapShot {
    return new SnapShot(this, this.text, this.cursorX, this.cursorY, this.selectionWidth, this.selectionHeight);
  }

  public print(): void {
    console.log(this.text);
    console.log(`Cursor: (${this.cursorX}, ${this.cursorY})`);
    console.log(`Selection: (${this.selectionWidth}, ${this.selectionHeight})`);
    console.log('-------------------------------------------------------------')
  }
}

class SnapShot {

  constructor(
    private editor: Editor, 
    private text: string, 
    private cursorX: number, 
    private cursorY: number, 
    private selectionWidth: number, 
    private selectionHeight: number, 
    public version: number = 0) {
  }

  public restore(): void {
    this.editor.setText(this.text);
    this.editor.setCursor(this.cursorX, this.cursorY);
    this.editor.setSelection(this.selectionWidth, this.selectionHeight);
  }
}

class EditorHistory {
  private currentVersion = 0;
  private latestVersion = 0;
  private mementos: SnapShot[] = [];
  private redos: SnapShot[] = [];

  // private backup: SnapShot | null;
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  public makeBackup(): void {
    const backup = this.createSnapshot();
    console.log(`Saving version ${backup.version} \n\n`);
    
    this.mementos.push(backup);
  }

  private getLatestVersion(): number {
    this.latestVersion++;
    this.currentVersion = this.latestVersion;
    return this.latestVersion;
  }

  public undo(): void {
    if (this.mementos.length <= 0)
      return;
    
    const current = this.createSnapshot();
    this.redos.push(current);

    const backup = this.mementos.pop();
    if (backup) {
      backup.restore();
      this.currentVersion = backup.version;
      console.log(`Un do to version ${this.currentVersion}`);
    }
  }

  public redo(): void {
    if (this.redos.length <= 0)
      return;

    const current = this.createSnapshot();
    this.mementos.push(current);

    const backup = this.redos.pop();
    if (backup) {
      backup.restore();
      this.currentVersion = backup.version;
      console.log(`Re do to version ${this.currentVersion}`);
    }
  }

  private createSnapshot(): SnapShot {
    const backup = new SnapShot(
      this.editor,
      this.editor.getText(),
      this.editor.getCursor().x,
      this.editor.getCursor().y,
      this.editor.getSelection().width,
      this.editor.getSelection().height,
      this.getLatestVersion()
    );
    return backup;
  }
}

const editor = new Editor();
const historyManager = new EditorHistory(editor);

editor.setText('ver1');
editor.setCursor(2, 4);
editor.setSelection(3, 5);
editor.print();

historyManager.makeBackup();

editor.setText('ver2.');
editor.print();
historyManager.makeBackup();


editor.setText('ver3');
editor.print();
historyManager.makeBackup();

editor.setText('ver4');
editor.print();
historyManager.makeBackup();

editor.setText('ver5');
editor.print();

historyManager.undo();
editor.print();

historyManager.undo();
editor.print();


historyManager.redo();
editor.print();

historyManager.redo();
editor.print();

historyManager.undo();
editor.print();

historyManager.undo();
editor.print();

historyManager.undo();
editor.print();

historyManager.undo();
editor.print();

historyManager.redo();
editor.print();

historyManager.redo();
editor.print();

historyManager.redo();
editor.print();

historyManager.redo();
editor.print();


