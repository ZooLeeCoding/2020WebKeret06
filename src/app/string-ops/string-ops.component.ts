import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-string-ops',
  templateUrl: './string-ops.component.html',
  styleUrls: ['./string-ops.component.css']
})
export class StringOpsComponent implements OnInit {

  str1: string;
  str2: string;
  result: string

  constructor(private routerService: Router) { }

  ngOnInit() {
  }

  navigateToFirstChild() {
    this.routerService.navigate(['/first-child']);
  }

  concat() {
    this.result = this.str1 + ' ' + this.str2;
  }

}
