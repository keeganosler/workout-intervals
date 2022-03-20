import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NagivationService {
  constructor() {}

  appState: boolean = false;
  appState$ = new Subject<boolean>();

  toggleAppState() {
    this.appState = !this.appState;
    this.appState$.next(this.appState);
  }
}
