import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { MenuModule } from './Menu/menu.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
  ],
  providers: [],
  bootstrap: [HeaderComponent],
  exports:[HeaderComponent]
})
export class HeaderModule { }
