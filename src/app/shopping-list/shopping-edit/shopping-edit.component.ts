import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: [ './shopping-edit.component.scss' ]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amtInputRef: ElementRef;
  @ViewChild('test') testInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmt = this.amtInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmt);
    this.ingredientAdded.emit(newIngredient);
    this.amtInputRef.nativeElement.value = ''
  }


}
