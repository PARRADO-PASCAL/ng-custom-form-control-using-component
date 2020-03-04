import { Component, Input, forwardRef, Injector, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, NgControl } from '@angular/forms';

export abstract class BaseFormControlWrapperComponent implements ControlValueAccessor  {

  @Input('value') val = '';
  @Input() showState: string;
  @Input() label: string;
  @Input() errors: Array<any>;

  ngControl: NgControl;

  onChange: any = () => { };
  onTouched: any = () => { };

  isValid = false;
  libellesErrors;

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

  manageErrors() {
    this.libellesErrors = [];

    // Gestion des erreurs
    if (this.ngControl.errors) {
      for(let key of Object.keys(this.ngControl.errors)) {
        this.libellesErrors.push(this.errors[key]); 
      }
    }
    this.isValid = this.ngControl && this.ngControl.dirty && this.ngControl.valid;
    console.log(this.ngControl.errors);
  }
}