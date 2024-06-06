import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { AboutComponent } from './about/about.component';
import { RecipesResolverservice } from './recipes/recipes-resolver.service';


const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverservice] },
    { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverservice] },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  {path: 'about', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}