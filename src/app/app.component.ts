import { Component, OnInit } from '@angular/core';
import { NagivationService } from './services/nagivation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Custom Interval Timer';

  isActiveSession: boolean = false;

  constructor(public navigationService: NagivationService) {}

  ngOnInit(): void {
    this.navigationService.appState$.subscribe(
      (state) => (this.isActiveSession = state)
    );
  }
}
