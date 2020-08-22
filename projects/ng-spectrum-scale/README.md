# ng-spectrum-scale

[![npm](https://img.shields.io/npm/v/ng-spectrum-scale.svg)](https://www.npmjs.com/package/ng-spectrum-scale)
[![npm downloads](https://img.shields.io/npm/dm/ng-spectrum-scale.svg)](https://npmjs.org/ng-spectrum-scale)
![publish](https://github.com/eddrichjanzzen/ng-spectrum-scale/workflows/Publish%20spectrum/badge.svg)

A spectrum scale component implemented using D3.js and Angular. 


## Getting started

### Dependencies
* D3.js

```
npm install d3
```

### Installation

```
npm install ng-spectrum-scale
```

### Setup
#### Import NgSpectrumScaleModule on your AppModule (EG: app.module.ts):

```js
...

// NgSpectrumScaleModule
import { NgSpectrumScaleModule } from 'ng-spectrum-scale';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // NgSpectrumScaleModule

    NgSpectrumScaleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
#### In your `app.component.html` add the following:

```html
<app-spectrum-scale
  [data]="-0.799"
  [leftLabel]="'Feminine'"
  [rightLabel]="'Masculine'"
  [middleLabel]="'Neutral'"
  [minVal]="-1"
  [maxVal]="1"
  [colorList]="['#FF6347', '#D53E4F','#090979','#0000FF']"
  [displayMeta]="'Your article is '+ '<b>Feminine</b>'"
>
</app-spectrum-scale>
```

#### And in your `app.component.ts`:

```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data=-0.799
  leftLabel='Feminine'
  rightLabel='Masculine'
  middleLabel='Neutral'
  minVal= -1
  maxVal= 1
  colorList = ['#FF6347', '#D53E4F','#090979','#0000FF']
  displayMeta = 'Your article is '+ '<b>Feminine</b>'
}
```

__Required Settings__
* [data]{number}: The data you wish to display on the scale.
* [minVal]{number}: The minimum value in the scale. (default value -1)
* [maxVal]{number}:  The maximum value in the scale (default value 1)


__Optional Settings__
* [leftLabel]{string}: The leftLabel value in the scale (blank by default)
* [rightLabel]{string}:  The leftLabel value in the scale (blank by default)
* [leftLabel]{string}: The leftLabel value in the scale (blank by default)
* [middleLabel]{html string}:  The displayMeta value in the scale. (blank by default)
* [hideAxis]{boolean}: Option to hide the axis displayed. (set to false by default)
* [colorList]{Array<string>}: Accepts a list of hex values to form the color spectrum. (sets a color spectrum for you by default). You may override this to change the spectrum. 

eg. colorList = ['#FF6347', '#D53E4F','#090979','#0000FF']

__Example Outputs__

![Sentiment](/images/sentiment-analysis.png)
![Gender](/images/gender-bias.png)

