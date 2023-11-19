interface Character {
    name: string;
    weapon: string;
    attack(): void;
}

class King implements Character {
    name: string;
    weapon: string;
    constructor(name: string, weapon: string) {
        this.name = name;
        this.weapon = weapon;
    }
    attack(): void {
        console.log(`King ${this.name} attack with ${this.weapon}`);
    }
}

class Queen implements Character {
    name: string;
    weapon: string;
    constructor(name: string, weapon: string) {
        this.name = name;
        this.weapon = weapon;
    }
    attack(): void {
        console.log(`Queen ${this.name} attack with ${this.weapon}`);
    }
}

class CharacterFlyweightFactory {
    private characters: {[key: string]: Character} = {};
    constructor() {
    }

    getCharacter(name: string): Character {
        if(!this.characters[name]) {
            //random create a character king or queen
            const random = Math.random();
            if(random > 0.5) {
                this.characters[name] = new King(name, "sword");
            } else {
                this.characters[name] = new Queen(name, "bow");
            }

        }
        return this.characters[name];
    }

    getCharacterCount(): number {
        return Object.keys(this.characters).length;
    }
}

const characterFactory = new CharacterFlyweightFactory();

const characterA = characterFactory.getCharacter("A");
console.log(characterFactory.getCharacterCount());
const characterB = characterFactory.getCharacter("B");
console.log(characterFactory.getCharacterCount());
const characterC = characterFactory.getCharacter("C");
console.log(characterFactory.getCharacterCount());


characterA.attack();
characterB.attack();
characterC.attack();

// Second line of text (reusing characters)
const characterD = characterFactory.getCharacter("A");
console.log(characterFactory.getCharacterCount());
const characterE = characterFactory.getCharacter("B");
console.log(characterFactory.getCharacterCount());
const characterF = characterFactory.getCharacter("C");
console.log(characterFactory.getCharacterCount());


characterD.attack();
characterE.attack();
characterF.attack();
