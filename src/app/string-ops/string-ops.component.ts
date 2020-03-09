import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-ops',
  templateUrl: './string-ops.component.html',
  styleUrls: ['./string-ops.component.css']
})
export class StringOpsComponent implements OnInit {

  str1: string;
  str2: string;
  result: string

  constructor() { }

  ngOnInit() {
  }

  concat() {
    this.result = this.str1 + ' ' + this.str2;
  }

}
