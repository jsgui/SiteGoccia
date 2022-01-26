import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipesDetailsModule } from './recipes-detail/recipes-detail.module';
import { RecipesListModule } from './recipes-list/recipes-list.module';

import { RecipesComponent } from './recipes.component';

@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    RecipesListModule,
    RecipesDetailsModule
  ],
  providers: [],
  bootstrap: [RecipesComponent],
  exports:[RecipesComponent]
})
export class RecipesModule { }
