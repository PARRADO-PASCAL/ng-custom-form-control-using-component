import { Component, Input, forwardRef, Injector, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, NgControl } from '@angular/forms';

import { AppInputContentComponent } from './app-input-content.component';

/**
 * Implementing form control custom with access to valid and dirty within 
 * the component
 */
@Component({
  selector: 'app-test',
  templateUrl:'./test.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppTestComponent),
      multi: true
    }
  ]
})
export class AppTestComponent extends AppInputContentComponent  {

  constructor(public injector: Injector){
    super(injector);
  }
}
