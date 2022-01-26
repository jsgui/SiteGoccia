import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipesItemModule } from './recipes-item/recipes-item.module';

import { RecipesListComponent } from './recipes-list.component';

@NgModule({
  declarations: [
    RecipesListComponent
  ],
  imports: [
    BrowserModule,
    RecipesItemModule
  ],
  providers: [],
  bootstrap: [RecipesListComponent],
  exports:[RecipesListComponent]
})
export class RecipesListModule { }
