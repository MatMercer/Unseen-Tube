import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NouisliderModule} from 'ng2-nouislider';
import {HttpModule} from '@angular/http';
import {UnseenTubeComponent} from './unseen-tube/unseen-tube.component';

@NgModule({
  declarations: [
    AppComponent,
    UnseenTubeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NouisliderModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
