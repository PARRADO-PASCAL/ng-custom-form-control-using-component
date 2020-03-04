import { Component, Input, forwardRef, Injector, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, NgControl } from '@angular/forms';

export abstract class BaseFormControlWrapperComponent implements ControlValueAccessor, OnInit  {

  @Input('value') val = '';
  @Input() showState: string;
  @Input() label: string;

  ngControl: NgControl;

  onChange: any = () => { };
  onTouched: any = () => { };

  isValid = false;

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
}
