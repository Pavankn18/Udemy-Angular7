import { element } from 'protractor';
import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, AfterViewInit {
  @Input('number') number: number;

  @ViewChild('outputPane') outputPane: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.outputPane.nativeElement.innerHTML = this.number;
  }

}
