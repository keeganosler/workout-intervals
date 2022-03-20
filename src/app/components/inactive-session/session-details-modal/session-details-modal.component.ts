import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NagivationService } from '../../../services/nagivation.service';

@Component({
  selector: 'app-session-details-modal',
  templateUrl: './session-details-modal.component.html',
  styleUrls: ['./session-details-modal.component.scss'],
})
export class SessionDetailsModalComponent implements OnInit {
  form = this.formBuilder.group({
    warmupTime: this.formBuilder.group({
      minutes: [5],
      seconds: [0],
    }),
    numberOfIntervals: [6],
    intervalTime: this.formBuilder.group({
      minutes: [1],
      seconds: [30],
    }),
    cooldownTime: this.formBuilder.group({
      minutes: [7],
      seconds: [0],
    }),
  });

  constructor(
    private formBuilder: FormBuilder,
    public navigationService: NagivationService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.value);
    this.navigationService.toggleAppState();
  }
}
