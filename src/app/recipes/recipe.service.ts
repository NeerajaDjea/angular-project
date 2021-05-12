import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Chicken pasta bake', 'Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. ', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken_pasta_bake-06fe2d6.jpg?quality=90&webp=true&resize=440,400', [ new Ingredient('pasta', 50), new Ingredient('chicken', 1) ]),

        new Recipe('Green club sandwich', 'This healthy sandwich is packed full of goodness to keep you going until dinner', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-219539_11-23fc6e6.jpg?quality=90&webp=true&resize=440,400', [ new Ingredient('bread', 2) ]),
        new Recipe('Chow mein', 'A classic Chinese dish of stir-fried egg noodles with shredded chicken breast. Experiment with different fish, meat or vegetables', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chow-mein-c48a006.jpg?quality=90&webp=true&resize=440,400', [ new Ingredient('noodles', 100), new Ingredient('veg', 10) ])
    ];
    constructor(private slService: ShoppingService) { }

    getRecipes() {
        return this.recipes.slice();
    }
    addShopping(ingredients: Ingredient[]) {
        this.slService.addToShopping(ingredients);

    }

}