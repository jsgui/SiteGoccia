import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [SidebarComponent],
  exports:[SidebarComponent]
})
export class SidebarModule { }
