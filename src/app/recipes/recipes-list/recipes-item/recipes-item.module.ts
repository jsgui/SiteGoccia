import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RecipesItemComponent } from './recipes-item.component';

@NgModule({
  declarations: [
    RecipesItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RecipesItemComponent],
  exports:[RecipesItemComponent]
})
export class RecipesItemModule { }
