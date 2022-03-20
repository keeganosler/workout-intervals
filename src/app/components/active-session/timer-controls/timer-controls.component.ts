import { Component, OnInit } from '@angular/core';
import { faPause } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-timer-controls',
  templateUrl: './timer-controls.component.html',
  styleUrls: ['./timer-controls.component.scss'],
})
export class TimerControlsComponent implements OnInit {
  faPause = faPause;
  constructor() {}

  ngOnInit(): void {}
}
