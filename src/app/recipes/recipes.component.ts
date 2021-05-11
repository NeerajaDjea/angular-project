import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model'
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: [ './recipes.component.scss' ]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: any;


  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.showStatus('Neeraja')

  }
  onSelect(recipe) {
    this.selectedRecipe = recipe
  }
}
