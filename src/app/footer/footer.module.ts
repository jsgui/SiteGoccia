import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FooterComponent } from './footer.component';

@NgModule({
  declarations: [
   FooterComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [FooterComponent],
  exports:[FooterComponent]
})
export class FooterModule { }
