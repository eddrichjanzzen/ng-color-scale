import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSpectrumScaleModule } from 'ng-spectrum-scale';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSpectrumScaleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
