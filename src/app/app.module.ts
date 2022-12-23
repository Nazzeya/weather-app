import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';

import { HttpClientModule }   from '@angular/common/http';
import { CelsiusPipe } from './pipes/celsius.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CelsiusPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
