import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CompanyComponent } from './company.component';

@NgModule({
  declarations: [
    CompanyComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [CompanyComponent],
  exports:[CompanyComponent]
})
export class CompanyModule { }
