import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HomePage} from "./home/home.page";

@NgModule({
  declarations: [HomePage],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
})
export class AppModule {}
