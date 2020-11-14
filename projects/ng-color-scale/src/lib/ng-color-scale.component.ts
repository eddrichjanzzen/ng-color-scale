import { Component, OnChanges, Input, OnInit, ChangeDetectionStrategy, SimpleChanges, ElementRef, HostListener, ViewEncapsulation} from '@angular/core';  
import * as d3 from 'd3';

@Component({
  selector: 'app-color-scale',
  templateUrl: './color-scale.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./color-scale.component.scss']
})
export class NgColorScaleComponent implements OnChanges {

  @Input() data : number;
  @Input() leftLabel: string;
  @Input() rightLabel: string;
  @Input() middleLabel: string;
  @Input() minVal: number = -1;
  @Input() maxVal: number = 1;
  @Input() hideAxis: boolean = false;
  @Input() colorList: string[] = ["#9E0142", "#D53E4F",
                    "#F46D43", "#FDAE61",
                    "#FEE08B", "#FFFFBF",
                    "#E6F598", "#ABDDA4", 
                    "#66C2A5", "#6AA84F",
                    "#38761D"]
  @Input() displayMeta: string;

  private _margin = {top: 50, right: 50, bottom: 30, left: 50};  
  private _svg: any; 
  private _chart: any;
  private _width: number;
  private _height:number;
  private _barWidth: number;
  private _xScale: any;
  private _colors: any;
  private _textHeight = 35;
  private _axisHeight = 45;
  private _axisOffset = 130;
  private _id: any;

  constructor(
    private host:ElementRef) {}

  ngOnChanges() {
    if (this._chart) {
      this._createChart();
    }
  }

  ngOnInit(){
    this._id ='id' + (new Date()).getTime();
    if(this.data){
      this._createChart();
    }
  }

  private _createChart(){
    d3.select(`#${this._id}`).remove();  
    
    this._width = this.host.nativeElement.clientWidth;
    this._height = this.host.nativeElement.clientHeight;
    this._barWidth = this._width - (this._margin.left + this._margin.right)

    this._svg = d3.select(this.host.nativeElement)
          .append('div')
          .attr('id', `${this._id}`)
          .attr('transform', `translate(${this._margin.left}, ${this._margin.top})`)
          .style('position', 'relative')
          .append("svg:svg") 
          .attr("width", this._width)
          .attr("height", this._height)

    this._chart = this._svg.append('g')  
          .attr('transform', `translate(${this._margin.left}, ${this._margin.top})`);

    this._xScale = d3.scaleLinear()
        .domain([this.minVal, this.maxVal])
        .range([0, this._barWidth])

    this._colors = d3.scaleLinear().domain([this.minVal, this.maxVal]).range(<any[]>this.colorList);

    if(!this.hideAxis){
      this._drawAxis()
    }

    this._drawLabels();
    this._drawcolorBar();
  }

  private _drawAxis(){
      var xAxis = d3.axisBottom(this._xScale)
        .tickPadding(5)
        .ticks(5)

      this._chart.append('g')
        .attr("class", "axis")
        .style("font-size", 12)
        .attr('transform', `translate(0, ${this._axisHeight + 5})`)
        .call(xAxis)
  }

  private _drawcolorBar(){
      
      var tempColorList = this.colorList
      var tempId = `${this._id}-grad`;

      var grad = this._chart.append('defs')
        .append('linearGradient')
        .attr('id', tempId)
        .attr('x1', '0%')
        .attr('x2', '100%')
        .attr('y1', '0%')
        .attr('y2', '0%');

      grad.selectAll('stop')
        .data(tempColorList)
        .enter()
        .append('stop')
        .style('stop-color', function(d){ return d; })
        .attr('offset', function(d,i){
          return 100 * (i / (tempColorList.length - 1)) + '%';
        })

      var gradValue = `url(#${tempId})`;
      var tipId = this._id

      var color_bar = this._chart.append('rect')
        .attr('class', 'bg-rect')
        .attr('rx', 5)
        .attr('ry', 5)
        .style('opacity', 1)
        .style('fill', gradValue)
        .attr('height', 15)
        .attr('width', this._barWidth)
        .attr('x', 0)
        .on("mouseover", function(d) {   
          d3.select(`#${tipId} > div.tip`).transition()
            .duration(300)
            .style("opacity", .9);      
          
          pickerTip.transition()
            .duration(300)    
            .style("opacity", .9);  

          d3.select(this).transition()    
            .duration(150)    
            .style("opacity", .8);      
        })          
        .on("mouseout", function(d) {    
          d3.select(`#${tipId} > div.tip`).transition()    
              .duration(500)    
              .style("opacity", 0);

          pickerTip.transition()    
              .duration(500)    
              .style("opacity", 0.7);

          d3.select(this).transition()    
            .duration(500)    
            .style("opacity", 1);
        });
      

      var pickerTip = this._chart.append('rect')
        .attr('class', 'picker-tip')
        .attr('rx', 4)
        .attr('ry', 4)
        .style('fill', '#333')
        .style('opacity', 0.7)
        .attr('height', 25)
        .attr('width', 10)
        .attr('y', -5)
        .attr('x', this._xScale(this.data) -5)

      d3.select(`#${this._id}`)
        .append('div')
        .attr('class', 'tip')
        .style('position','absolute')
        .style('border-radius', '10px')
        .style('background-color', '#e8f2fa')
        .style('padding', '10px')
        .style('top', `${-5}px`)
        .style('opacity', 0)
        .style('left', `${this._xScale(this.data) +50}px`)
        .html(this.data.toFixed(2))

  }


  private _drawLabels(){
    //left label
    this._chart.append('text')
      .attr('x', 0)
      .attr('y', this._textHeight)
      .attr('text-anchor', 'middle')
      .attr('font-family', 'Roboto')
      .attr('font-weight', 200)
      .attr('class', 'left-label')
      .text(this.leftLabel);

    // right label
    this._chart.append('text')
      .attr('x', this._barWidth)
      .attr('y', this._textHeight)
      .attr('text-anchor', 'middle')
      .attr('font-family', 'Roboto')
      .attr('class', 'right-label')
      .text(this.rightLabel);

    // middle label
    this._chart.append('text')
      .attr('x',this._barWidth/2)
      .attr('y', this._textHeight)
      .attr('font-family', 'Roboto')
      .attr('text-anchor', 'middle')
      .attr('class', 'middle-label')
      .text(this.middleLabel);

    // display meta
    d3.select(`#${this._id}`)
      .append('div')
      .style('position','absolute')
      .style('font-family', 'Roboto')
      .style('text-align', 'center')
      .style('width', '100%')    
      .style('top', `${this._axisOffset}px`)
      .html(this.displayMeta)
      
    }

  @HostListener('window:resize', ['$event'])
  public _onResize(event) {
    this._createChart();
  }


}

