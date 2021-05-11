import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: [ './recipe-list.component.scss' ]
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Chicken pasta bake', 'Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. ', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken_pasta_bake-06fe2d6.jpg?quality=90&webp=true&resize=440,400'),
    new Recipe('Green club sandwich', 'This healthy sandwich is packed full of goodness to keep you going until dinner', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-219539_11-23fc6e6.jpg?quality=90&webp=true&resize=440,400'),
    new Recipe('Chow mein', 'A classic Chinese dish of stir-fried egg noodles with shredded chicken breast. Experiment with different fish, meat or vegetables', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chow-mein-c48a006.jpg?quality=90&webp=true&resize=440,400')
  ];

  constructor() { }

  ngOnInit(): void {

  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);



  }

}
