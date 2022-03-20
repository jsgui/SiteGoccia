import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MenuComponent],
  exports:[MenuComponent]
})
export class MenuModule { }
