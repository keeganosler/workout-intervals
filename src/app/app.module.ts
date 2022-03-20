import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InactiveSessionComponent } from './components/inactive-session/inactive-session.component';
import { SessionDetailsModalComponent } from './components/inactive-session/session-details-modal/session-details-modal.component';
import { ActiveSessionComponent } from './components/active-session/active-session.component';
import { TimerSmallComponent } from './components/active-session/timer-small/timer-small.component';
import { TimerLargeComponent } from './components/active-session/timer-large/timer-large.component';
import { TimerControlsComponent } from './components/active-session/timer-controls/timer-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    InactiveSessionComponent,
    SessionDetailsModalComponent,
    ActiveSessionComponent,
    TimerSmallComponent,
    TimerLargeComponent,
    TimerControlsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
