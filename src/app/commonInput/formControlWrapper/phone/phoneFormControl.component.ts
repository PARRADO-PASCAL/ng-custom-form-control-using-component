import { Component, Input, forwardRef, Injector, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, NgControl } from '@angular/forms';

import {BaseFormControlWrapperComponent} from '../BaseFormControlWrapper.component';

/**
 * Implementing form control custom with access to valid and dirty within 
 * the component
 */
@Component({
  selector: 'phone-form-control',
   providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneFormControl),
      multi: true
    }
  ],
  templateUrl: './phoneFormControl.component.html'
})
export class PhoneFormControl extends BaseFormControlWrapperComponent implements OnInit{
@Input() name: string;
  @Input('value')
  val = '';
  @Input() showState: string;
  @Input() label: string;

  ngControl: NgControl;

  inputStyle = {
    borderColor: "unset"
  };

  onChange: any = () => { };
  onTouched: any = () => { };

   constructor(public injector: Injector){
     super(injector);
   }

  ngOnInit() {
    this.ngControl = this.injector.get(NgControl);
    if (this.ngControl != null) { this.ngControl.valueAccessor = this; }
  }

  isValid() {
    return this.ngControl && this.ngControl.dirty && this.ngControl.valid;
  }
}
