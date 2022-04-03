import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { reactiveFormBuilder } from './reactive-form-builder.component';
import { reactiveFormGroup } from './reactive-form-group.component';

@NgModule({
  declarations: [AppComponent, reactiveFormGroup, reactiveFormBuilder],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
