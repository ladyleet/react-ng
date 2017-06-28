import { Component, OnInit, ElementRef } from '@angular/core';
import * as ReactDOM from 'react-dom';
import { ReactComponent } from '../react-component';
import * as React from 'react';

@Component({
  selector: 'app-react-component-wrapper',
  templateUrl: './react-component-wrapper.component.html',
  styleUrls: ['./react-component-wrapper.component.css']
})
export class ReactComponentWrapperComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit() {
    ReactDOM.render(this.element.nativeElement, <ReactComponent/>)
  }
}
