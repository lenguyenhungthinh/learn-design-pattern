class AircraftContext {
  private isAirCraft: boolean = false;

  constructor(private acModel: string) { }

  getModel(): string {
    return this.acModel;
  }

  getLength(): number {
    return this.acModel.length;
  }

  getLastChar(): string {
    return this.acModel[this.acModel.length - 1];
  }

  getFirstChar(): string {
    return this.acModel[0];
  }

  setAirCraft(isAirCraft: boolean): void {
    this.isAirCraft = isAirCraft;
  }

  checkIsAirCraft(): boolean {
    return this.isAirCraft;
  }
}

interface IExpression {
  interpret(context: AircraftContext): void;
}

class CheckExpression implements IExpression {
  interpret(context: AircraftContext): void {
    //We assume tthe aircraft models only start with A or B and contains 4 or 5 chars.
    const acModel = context.getModel();

    const isAircraftModel = (acModel.startsWith('A') || acModel.startsWith('B')) &&
      (acModel.length === 4 || acModel.length === 5);

    context.setAirCraft(isAircraftModel);

    const message = isAircraftModel
      ? `The model ${acModel} is an aircraft model.`
      : `The model ${acModel} is not an aircraft model.`;

    console.log(message);
  }
}

class BrandExpression implements IExpression {
  interpret(context: AircraftContext): void {
    const acModel = context.getModel();
    const isAirCraft = context.checkIsAirCraft();
    const firstChar = context.getFirstChar();

    const brandDictionary: Record<string, string> = {
      'A': 'Airbus',
      'B': 'Boeing',
    };

    if (isAirCraft) {
      const brand = brandDictionary[firstChar] || 'unknown';
      console.log(`The model ${acModel} is a ${brand} aircraft model.`);
    } else {
      console.log(`Brand not found for the model ${acModel}.`);
    }
  }
}

class ModelExpression implements IExpression {
  interpret(context: AircraftContext): void {
    const acModel = context.getModel();
    const isAirCraft = context.checkIsAirCraft();
    const model = acModel.substring(1, 4);

    if (isAirCraft) {
      console.log(`The model ${acModel} is ${model}.`);
    } else {
      console.log(`The model ${acModel} is not an aircraft model.`)
    }
  }
}

class TypeExpression implements IExpression {
  interpret(context: AircraftContext): void {
    const acModel = context.getModel();
    const isAirCraft = context.checkIsAirCraft();
    const lastChar = context.getLastChar();
    const length = context.getLength();

    if (isAirCraft) {
      const aircraftType = (length === 4 && lastChar === 'F') ?
        'Fighter' : 'Passenger Transportation';
      console.log(`The model ${acModel} is a ${aircraftType}.`);
    } else {
      console.log(`Type not found for the model ${acModel}.`)
    }
  }
}

const aircrafts: AircraftContext[] = [];
const expressions: IExpression[] = [];

aircrafts.push(new AircraftContext('A330'));
aircrafts.push(new AircraftContext('A330F'));
aircrafts.push(new AircraftContext('B777'));
aircrafts.push(new AircraftContext('B777F'));
aircrafts.push(new AircraftContext('TheCode'));

expressions.push(new CheckExpression());
expressions.push(new BrandExpression());
expressions.push(new ModelExpression());
expressions.push(new TypeExpression());

for (const aircraft of aircrafts) {
  for (const expression of expressions) {
    expression.interpret(aircraft);
  }
  console.log('-----------------');
}

