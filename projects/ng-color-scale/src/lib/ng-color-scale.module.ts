import { NgModule } from '@angular/core';
import { NgColorScaleComponent } from './ng-color-scale.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [NgColorScaleComponent],
  imports: [
    	CommonModule
  ],
  exports: [NgColorScaleComponent]
})
export class NgColorScaleModule { }
