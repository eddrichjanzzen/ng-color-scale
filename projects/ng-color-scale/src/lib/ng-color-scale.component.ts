import { Component, OnChanges, Input, OnInit, ChangeDetectionStrategy, SimpleChanges, ElementRef, HostListener, ViewEncapsulation} from '@angular/core';  
import * as d3 from 'd3';


@Component({
  selector: 'ng-color-scale',
  template: `
    <p>
      ng-color-scale works!
    </p>
  `,
  styles: [
  ]
})
export class NgColorScaleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
