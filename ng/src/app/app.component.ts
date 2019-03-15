import { Component } from '@angular/core';
import {SessionService} from "./shared/services/session.service";
import {Status} from "./shared/interfaces/status";

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent {
  status : Status = {status: null, message: null, type: null};
  constructor(sessionService : SessionService) {
    sessionService.setSession().subscribe(reply => this.status = reply)
  }
}
