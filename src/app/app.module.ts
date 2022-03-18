import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InactiveSessionComponent } from './components/inactive-session/inactive-session.component';
import { SessionDetailsModalComponent } from './components/inactive-session/session-details-modal/session-details-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    InactiveSessionComponent,
    SessionDetailsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
