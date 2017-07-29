import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent } from "./first.component";
import { SecondComponent } from "./second.component";
import { SharedService } from "./shared.service";

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([
    {
      path:'first',
      component:FirstComponent
    },
    {
      path:'second',
      component:SecondComponent
    }
  ])],
  declarations: [AppComponent, FirstComponent, SecondComponent],
  bootstrap: [AppComponent],
  providers: [SharedService]
})
export class AppModule { }
