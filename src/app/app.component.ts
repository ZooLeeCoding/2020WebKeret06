import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebKeret03';

  child_message: string;

  books = ['Harry Potter', 'Lord of the Rings', 'Star Wars', 'Warhammer'];

  handleClick() {
    this.title = 'Kattintottunk a gombon';
  }

  buyBook(title: string) {
    this.title = 'Megvettem a ' + title + ' című könyvet';
  }

  onChildMessage(msg: string) {
    console.log(msg);
    this.child_message = msg;
  }
}
