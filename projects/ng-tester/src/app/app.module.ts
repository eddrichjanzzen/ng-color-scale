import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgColorScaleModule } from 'ng-color-scale';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgColorScaleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
