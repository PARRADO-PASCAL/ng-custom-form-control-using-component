import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      state: this.fb.control(''),
      firstName: this.fb.control('', Validators.minLength(3)),
      lastName: this.fb.control('', [Validators.minLength(3), Validators.maxLength(10)]),
      mobilePhone: this.fb.control('', [Validators.pattern('^06[0-9]*$'),Validators.minLength(10)]),
      test: this.fb.control('', [Validators.minLength(5), Validators.maxLength(5)]),
      tel: this.fb.control('', [Validators.pattern('^06[0-9]*$'),Validators.minLength(10), Validators.maxLength(14)])
    });
  } 
}
