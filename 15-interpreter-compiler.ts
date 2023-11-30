// Đối tượng chung cho Interpreter
interface Expression {
  interpret(): number;
}

// Đối tượng Terminal biểu diễn một số nguyên
class NumberExpression implements Expression {
  private value: number;

  constructor(value: number) {
      this.value = value;
  }

  interpret(): number {
      return this.value;
  }
}

// Đối tượng NonTerminal biểu diễn các phép toán số học
class AdditionExpression implements Expression {
  private left: Expression;
  private right: Expression;

  constructor(left: Expression, right: Expression) {
      this.left = left;
      this.right = right;
  }

  interpret(): number {
      return this.left.interpret() + this.right.interpret();
  }
}

class SubtractionExpression implements Expression {
  private left: Expression;
  private right: Expression;

  constructor(left: Expression, right: Expression) {
      this.left = left;
      this.right = right;
  }

  interpret(): number {
      return this.left.interpret() - this.right.interpret();
  }
}

class MultiplicationExpression implements Expression {
  private left: Expression;
  private right: Expression;

  constructor(left: Expression, right: Expression) {
      this.left = left;
      this.right = right;
  }

  interpret(): number {
      return this.left.interpret() * this.right.interpret();
  }
}

class DivisionExpression implements Expression {
  private left: Expression;
  private right: Expression;

  constructor(left: Expression, right: Expression) {
      this.left = left;
      this.right = right;
  }

  interpret(): number {
      const divisor = this.right.interpret();
      if (divisor === 0) {
          throw new Error("Division by zero");
      }
      return this.left.interpret() / divisor;
  }
}


// Biểu diễn cây cú pháp cho biểu thức: 3 * (5 + 2) / 4
const expressionTree: Expression = new DivisionExpression(
  new MultiplicationExpression(
      new NumberExpression(3),
      new AdditionExpression(
          new NumberExpression(5),
          new NumberExpression(2)
      )
  ),
  new NumberExpression(4)
);

// Biên dịch và hiển thị kết quả
const InterpreterRes = expressionTree.interpret();
console.log("Result:", InterpreterRes);
