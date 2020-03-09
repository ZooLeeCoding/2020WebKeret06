import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {

  @Input() title: string;

  @Output() saysomething = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  emitSomething() {
    this.saysomething.emit('Something something dark side - Darth Sidious');
  }

}
