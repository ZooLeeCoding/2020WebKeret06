import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.bookForm = fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      published: [''],
      price: ['', Validators.required]
    })
   }

   onSubmit() {
     console.log(this.bookForm.valid);
     console.log(this.bookForm.value);
   }

  ngOnInit() {
    
  }

}
