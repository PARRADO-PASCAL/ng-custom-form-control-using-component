import { Component, Input,Output, forwardRef, Injector, OnInit, OnChanges, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, NgControl } from '@angular/forms';

/**
 * Implementing form control custom with access to valid and dirty within 
 * the component
 */
@Component({
  selector: 'app-input-telephone',
  templateUrl: './inputTelephone.html',
})
export class AppInputTelephoneComponent {
    @Input() name: string;
    @Input() val = '';
    @Input() label: string;
    @Input() valid: string;

    @Output() valChange = new EventEmitter();

    @Output() blur = new EventEmitter();
    @Output() input = new EventEmitter();

    onBlur($event) {
      this.blur.emit();
    }

    onInput($event) {
      this.valChange.emit($event.target.value);
      this.input.emit();
    }
}
