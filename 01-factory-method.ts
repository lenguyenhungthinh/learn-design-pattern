
interface Animal {
    makeSound(): void;
}

class Dog implements Animal {
    public makeSound(): void {
        console.log("Woof!");
    }
}

class Cat implements Animal {
    public makeSound(): void {
        console.log("Meow!");
    }
}

interface IAnimalFactory {
    createAnimal(): Animal;
}

class CatFactory implements IAnimalFactory {
    createAnimal(): Animal {
        return new Cat();
    }
}

class DogFactory implements IAnimalFactory {
    createAnimal(): Animal {
        return new Dog();
    }
}

const dogFactory = new DogFactory();
const dog = dogFactory.createAnimal();

const catFactory = new CatFactory();
const cat = catFactory.createAnimal();

dog.makeSound();
cat.makeSound();