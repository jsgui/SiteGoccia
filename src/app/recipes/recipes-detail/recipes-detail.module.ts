import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RecipesDetailComponent } from './recipes-detail.component';

@NgModule({
  declarations: [
    RecipesDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RecipesDetailComponent],
  exports:[RecipesDetailComponent]
})
export class RecipesDetailsModule { }
