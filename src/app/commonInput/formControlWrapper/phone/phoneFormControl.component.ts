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

  ngControl: NgControl;

   constructor(public injector: Injector){
     super(injector);
   }

  ngOnInit() {
    this.ngControl = this.injector.get(NgControl);
    if (this.ngControl != null) { this.ngControl.valueAccessor = this; }
    
  }

  onBlur() {
    if (this.showState === 'blur') {
      this.manageErrors();
    }
  }

  onInput() {
    if (this.showState === 'input') {
      this.manageErrors();
    }
  }

}
