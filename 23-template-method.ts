
abstract class Recipe {
  // Template method
  public cook(): void {
    this.prepareIngredients();
    this.cookIngredients();
    this.serve();
  }

  // Abstract methods to be implemented by subclasses
  protected abstract prepareIngredients(): void;
  protected abstract cookIngredients(): void;

  // Hook method that can be overridden by subclasses
  protected serve(): void {
    console.log("Serve the dish");
  }
}

class PastaRecipe extends Recipe {
  protected prepareIngredients(): void {
    console.log("Gather pasta, sauce, and spices");
  }

  protected cookIngredients(): void {
    console.log("Boil water, cook pasta, and heat sauce");
  }
}

class PizzaRecipe extends Recipe {
  protected prepareIngredients(): void {
    console.log("Gather dough, sauce, cheese, and toppings");
  }

  protected cookIngredients(): void {
    console.log("Roll out dough, spread sauce, add cheese and toppings, and bake");
  }

  protected serve(): void {
    console.log("Serve the pizza with a side of garlic bread");
  }
}

// Usage
const pastaRecipe = new PastaRecipe();
pastaRecipe.cook();

const pizzaRecipe = new PizzaRecipe();
pizzaRecipe.cook();
