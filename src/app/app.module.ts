import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';

import { RecipesModule } from './recipes/recipes.module';
import { RecipesListModule } from './recipes/recipes-list/recipes-list.module';
import { RecipesDetailsModule } from './recipes/recipes-detail/recipes-detail.module';
import { RecipesItemModule } from './recipes/recipes-list/recipes-item/recipes-item.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingEditModule } from './shopping-list/shopping-edit/shopping-edit.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HeaderModule,
    RecipesModule,
    RecipesListModule,
    RecipesDetailsModule,
    RecipesItemModule,
    ShoppingListModule,
    ShoppingEditModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
