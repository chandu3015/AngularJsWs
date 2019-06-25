import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Rasam', 'Indian Soup', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/11/rasam-recipe-500x500.jpg'),
    new Recipe('Chicken', 'Chicken Biryani', 'https://www.africanbites.com/wp-content/uploads/2018/04/IMG_0165.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
     this.recipeWasSelected.emit(recipe);
  }
}
