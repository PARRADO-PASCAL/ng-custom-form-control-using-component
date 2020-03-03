import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-input',
   providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppInputComponent),
      multi: true
    }
  ],
  template: `
      <label [for]="name" >{{label}} </label>
      <input type="text" [id]="name" [name]="name" [(ngModel)]="value" [ngStyle]="inputStyle" (blur)="onBlur()" (input)="onInput()"/>
  `
})
export class AppInputComponent implements ControlValueAccessor  {

  @Input()
  name: string;
  @Input('value')
  val: string;
  @Input() showState: string;
  @Input() valid: boolean;
  @Input() dirty: boolean;
  @Input() label: string;

  inputStyle = {
    borderColor: "unset"
  };

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() {}

  get value() {
    return this.val;
  }

  set value(val) {
    this.val = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) { 
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  resetStyle() {
    this.inputStyle.borderColor = "unset";
  }

  onBlur() {
    if (this.dirty && this.showState === 'blur') {
      if(this.valid) {
        this.inputStyle.borderColor = "green";
      }
      else {
         this.inputStyle.borderColor = "red";
      }
    }
  }

  onInput() {
    if (this.dirty && this.showState === 'input') {
      if(this.valid) {
        this.inputStyle.borderColor = "green";
      }
      else {
         this.inputStyle.borderColor = "red";
      }
    }
  }
}
