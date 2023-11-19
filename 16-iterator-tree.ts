// help me build iterator for binary tree

class BinaryTree {
    constructor(public value: number) {
        this.value = value;
    }

    public left: BinaryTree | null = null;
    public right: BinaryTree | null = null;
}

class BinaryTreeIterator {
    private stack: BinaryTree[] = [];
    private current: BinaryTree | null = null;

    constructor(tree: BinaryTree) {
        this.current = tree;
    }

    public next(): number | null {
        while (this.current !== null) {
            this.stack.push(this.current);
            this.current = this.current.left;
        }

        this.current = this.stack.pop() || null;

        const value = this.current?.value ?? null;

        this.current = this.current?.right ?? null;

        return value;
    }
}

const tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(3);
tree.left.left = new BinaryTree(4);
tree.left.right = new BinaryTree(5);

const treeTterator = new BinaryTreeIterator(tree);

console.log(treeTterator.next());
console.log(treeTterator.next());
console.log(treeTterator.next());
console.log(treeTterator.next());
console.log(treeTterator.next());
console.log(treeTterator.next());

