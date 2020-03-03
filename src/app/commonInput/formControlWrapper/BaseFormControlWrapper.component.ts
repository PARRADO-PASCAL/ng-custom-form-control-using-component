import { Component, Input, forwardRef, Injector, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, NgControl } from '@angular/forms';

/**
 * Implementing form control custom with access to valid and dirty within 
 * the component
 */
@Component({
   providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BaseFormControlWrapperComponent),
      multi: true
    }
  ]
})
export class BaseFormControlWrapperComponent implements ControlValueAccessor, OnInit  {

  @Input('value')
  val: string;
  @Input() showState: string;
  @Input() label: string;

  ngControl: NgControl;

  inputStyle = {
    borderColor: "unset"
  };

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor(public injector: Injector){}

  ngOnInit() {
    this.ngControl = this.injector.get(NgControl);
   if (this.ngControl != null) { this.ngControl.valueAccessor = this; }
  }

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
    if (this.ngControl.dirty && this.showState === 'blur') {
      if(this.ngControl.valid) {
        this.inputStyle.borderColor = "green";
      }
      else {
         this.inputStyle.borderColor = "red";
      }
    }
  }

  onInput() {
    if (this.ngControl.dirty && this.showState === 'input') {
      if(this.ngControl.valid) {
        this.inputStyle.borderColor = "green";
      }
      else {
         this.inputStyle.borderColor = "red";
      }
    }
  }
}
