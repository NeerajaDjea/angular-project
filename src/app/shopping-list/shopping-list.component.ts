import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: [ './shopping-list.component.scss' ],
  providers: [ UserServiceService ]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('eggs', 6),
    new Ingredient('tomato', 3),
    new Ingredient('potatoes', 5)
  ];

  constructor(private userService: UserServiceService) {

  }

  ngOnInit(): void {
  }
  onIngredientAdded(int) {
    this.ingredients.push(int)
    this.userService.showStatus('Ingredient')
  }
}
