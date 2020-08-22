import { NgModule } from '@angular/core';
import { NgSpectrumScaleComponent } from './ng-spectrum-scale.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [NgSpectrumScaleComponent],
  imports: [
  	CommonModule
  ],
  exports: [NgSpectrumScaleComponent]
})
export class NgSpectrumScaleModule { }
