import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() emitter: EventEmitter<number> = new EventEmitter<number>();
  numbers: number[] = [];
  i = 0;
  ref;

  constructor() { }

  ngOnInit() {
  }

  onStartClick() {
    this.ref = setInterval(() => { this.i = this.i + 1;
      this.numbers.push(this.i);
      this.emitter.emit(this.i); }, 1000 );
  }

  onStopClick() {
    clearInterval( this.ref );
  }

}
