
abstract class ITreeItem08 {
    abstract render(): void;
    constructor(protected name: string, protected level: number = 0) {}
    abstract increaseLevel(): void;
    getLevel(): number {     
        return this.level;
    }
    abstract setLevel(level: number): void;
}

class Folder08 extends ITreeItem08 {
    setLevel(level: number): void {
        this.level = level;
        this.children.forEach(child => {
            child.setLevel(level + 1);
        });
    }
    private children: ITreeItem08[] = [];
    increaseLevel() {
        this.level++;
        this.children.forEach(child => {
            child.increaseLevel();
        });
    }
    add(child: ITreeItem08) {
        child.increaseLevel();
        this.children.push(child);
    }
    render() {
        console.log(`${dotByLevel(this.getLevel())}${this.name}`);
        this.children.forEach(child => child.render());
    }
}

class File08 extends ITreeItem08 {
    setLevel(level: number): void {
        this.level = level;
    }
    increaseLevel() {
        this.level++;
    }
    render() {
        console.log(`${dotByLevel(this.getLevel())}${this.name}`);
    }
}


function dotByLevel(level: number): string {
    let result = '';
    for (let i = 0; i < level; i++) {
        result += '....';
    }
    return result;
}

const root = new Folder08('root');
const folder1 = new Folder08('folder1');
const folder2 = new Folder08('folder2');
const file1 = new File08('file1');
const file2 = new File08('file2');
const file3 = new File08('file3');
const file4 = new File08('file4');
const file5 = new File08('file5');

folder1.add(file1);
folder1.add(file2);
folder2.add(file3);
folder2.add(file4);
root.add(folder1);
root.add(folder2);
root.add(file5);
root.render();
