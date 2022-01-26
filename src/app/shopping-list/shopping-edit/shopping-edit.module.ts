import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShoppingEditComponent } from './shopping-edit.component';

@NgModule({
  declarations: [
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ShoppingEditComponent],
  exports:[ShoppingEditComponent]
})
export class ShoppingEditModule { }
