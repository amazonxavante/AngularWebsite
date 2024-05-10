import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
 recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Prawns Salad',
            'This is simply a test',
            'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
            [
                new Ingredient('Prawns', 5),
                new Ingredient('Lettuce', 6),
                new Ingredient('Souce', 7),
            ]
        ),
        new Recipe(
            'Chicken Risotto',
            'This is simply a test',
            'https://i.pinimg.com/originals/4c/bd/fa/4cbdfa371e0e1fac0be07a2686eb907d.jpg',
        [
            new Ingredient('chicken', 1),
            new Ingredient('Rice', 2),
            new Ingredient('Wine', 2)
           
        ]),
        new Recipe(
            'Sea Food Pizza',
            'This is simply a test',
            'https://i.pinimg.com/originals/e7/3b/fe/e73bfe186daae5049c25672fd5921460.jpg',
            [
                new Ingredient('SeaFood', 6),
                new Ingredient('Blue Cheese', 3),
                new Ingredient('Dice Vegetable', 4),
            ]),
        new Recipe(
            'Organic Pasta',
            'This is simply a test',
            'https://i.pinimg.com/originals/27/0e/e2/270ee205dec7500a344f5d6d860cb612.jpg',
            [
                new Ingredient('Roasted Vegetable', 4),
                new Ingredient('Organic Cheese', 3),
                new Ingredient('Organic Pasta', 3),

            ]),
        new Recipe(
            'Morning Breakfast',
            'This is simply a test',
            'https://i.pinimg.com/originals/98/a9/c5/98a9c517c9c264100df70be099b1f899.jpg',
            [
                new Ingredient('Poach Egg', 3),
                new Ingredient('Roasted Vegetable', 2),
                new Ingredient('Toasted Bread', 1),
                new Ingredient('Avocado', 1),
                new Ingredient('Bacon', 1),

            ]),
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);

    }
}