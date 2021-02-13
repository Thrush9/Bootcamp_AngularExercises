import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MymaterialModule } from './mymaterial/mymaterial.module';
import { FormHighlightDirective } from './form-highlight.directive'


@NgModule({
  declarations: [
    AppComponent,
    FormHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MymaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
