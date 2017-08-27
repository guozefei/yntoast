import { Component, ElementRef } from '@angular/core';
import * as jqueryProxy from 'jquery';
const jquery: JQueryStatic = (<any>jqueryProxy).default || jqueryProxy;
import * as _ from 'underscore';

@Component({
  selector: 'sample-component',
  template: `<h1>Sample component</h1>`
})
export class SampleComponent {
  public el;
  constructor(
    private elem: ElementRef
  ) {
    this.el = jquery(this.elem.nativeElement);
    let myId = _.rest([5, 4, 3, 2, 1]);
  }

}
