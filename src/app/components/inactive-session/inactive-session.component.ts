import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inactive-session',
  templateUrl: './inactive-session.component.html',
  styleUrls: ['./inactive-session.component.scss'],
})
export class InactiveSessionComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  constructor() {}

  ngOnInit(): void {}
}
