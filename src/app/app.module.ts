import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent, PrettyNumberPipe, SafeStylePipe, SafeUrlPipe} from './app.component';
import {NouisliderModule} from 'ng2-nouislider';
import {HttpModule} from '@angular/http';
import {UnseenTubeComponent} from './unseen-tube/unseen-tube.component';
import { UnseenTubeVideoCollectionComponent } from './unseen-tube/unseen-tube-video-collection/unseen-tube-video-collection.component';
import { UnseenTubeVideoComponent } from './unseen-tube/unseen-tube-video/unseen-tube-video.component';

@NgModule({
  declarations: [
    AppComponent,
    UnseenTubeComponent,
    SafeUrlPipe,
    SafeStylePipe,
    PrettyNumberPipe,
    UnseenTubeVideoCollectionComponent,
    UnseenTubeVideoComponent
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
