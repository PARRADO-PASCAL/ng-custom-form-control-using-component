import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StateSelectorComponent } from './state-selector.component';
import { AppInputComponent } from './input-app.component';
import { AppInputTestComponent } from './app-input-test.component';
import { AppInputContentComponent } from './app-input-content.component';
import { AppTestComponent } from './test.component';
import { PhoneFormControl } from './commonInput/formControlWrapper/phone/phoneFormControl.component';
import { AppInputTelephoneComponent } from './commonInput/inputView/inputTelephone/inputTelephone.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, StateSelectorComponent, AppInputComponent, AppInputTestComponent, AppInputContentComponent, AppTestComponent, PhoneFormControl, AppInputTelephoneComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
