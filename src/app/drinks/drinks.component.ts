import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model'

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: [ './drinks.component.scss' ]
})
export class DrinksComponent implements OnInit {
  drinks: Recipe[] = [
    new Recipe('Watermelon daiquiri', 'Watermelon daiquiri', "https://images.immediate.co.uk/production/volatile/sites/30/2021/04/Watermelon-Daiqiri-e7be7d2.jpg?webp=true&quality=90&resize=556%2C505"),
    new Recipe('Strawberry smoothie', 'Strawberry smoothie', "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/smoothie-e080f40.jpg?webp=true&quality=90&resize=440%2C400"),
    new Recipe('Sunshine smoothie', 'Sunshine smoothie', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/sunshine-smoothie-0250bef.jpg?webp=true&quality=90&resize=440%2C400'),
  ]
  constructor() { }

  ngOnInit(): void {

  }
}
