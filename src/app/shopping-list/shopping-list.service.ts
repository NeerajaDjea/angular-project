import { Ingredient } from '../shared/ingredient.model'

export class ShoppingService {

    private ingredients: Ingredient[] = [
        new Ingredient('eggs', 6),
        new Ingredient('tomato', 3),
        new Ingredient('potatoes', 5)
    ];

    getIngredient() {
        return this.ingredients;
    }
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)

    }
    addToShopping(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);

    }
}