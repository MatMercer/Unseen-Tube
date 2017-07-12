import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnseenTubeComponent } from './unseen-tube/unseen-tube.component';

@NgModule({
  declarations: [
    AppComponent,
    UnseenTubeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
