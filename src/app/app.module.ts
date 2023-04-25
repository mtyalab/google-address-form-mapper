import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LocationFormComponent } from './location-form/location-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    AppComponent,
    LocationFormComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
      AgmCoreModule.forRoot({
        apiKey: "API_KEY",
      })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
