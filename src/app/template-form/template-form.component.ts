import { Component, OnInit } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  
  book: Book;

  constructor() {
    this.book = {} as Book;
  }

  submit() {
    console.log(this.book);
  }

  ngOnInit() {
  }

}
