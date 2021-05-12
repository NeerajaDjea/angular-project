import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: [ './shopping-list.component.scss' ],



})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  constructor(private slService: ShoppingService) {
  };

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredient()
  }
  onIngredientAdded(int) {
    this.ingredients.push(int)

  }
}
