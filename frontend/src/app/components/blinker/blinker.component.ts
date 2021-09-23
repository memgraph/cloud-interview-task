import { Component, Input, OnInit } from '@angular/core';
import { State } from 'src/app/enums/state';

@Component({
  selector: 'app-blinker',
  templateUrl: './blinker.component.html',
  styleUrls: ['./blinker.component.scss'],
})
export class BlinkerComponent implements OnInit {
  @Input() state: string;

  ngOnInit() {
    console.log('state', this.state);
  }

  getStateCSS() {
    console.log('getting state');
    const state = this.state;
    if (state === State.Running) {
      return 'running-state';
    } else if (state === State.Starting || state === State.Resuming) {
      return 'running-state blinking';
    } else if (state === State.Paused) {
      return 'stopped-state';
    } else if (state === State.Pausing) {
      return 'running-state blinking';
    } else if (state === State.Error) {
      return 'error-state';
    } else {
      return null;
    }
  }
}
