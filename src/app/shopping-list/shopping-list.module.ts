import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShoppingEditModule } from './shopping-edit/shopping-edit.module';

import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    ShoppingEditModule
  ],
  providers: [],
  bootstrap: [ShoppingListComponent],
  exports:[ShoppingListComponent]
})
export class ShoppingListModule { }
