import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { serachResultService } from './components/search-result/search-result.service';
import { flightService } from './aap.fligtsService';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchInputComponent, 
    SearchResultComponent 
      
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    serachResultService,
    flightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
