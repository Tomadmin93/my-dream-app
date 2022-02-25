import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  canResetUsername: boolean = false;
  showSecret: boolean = false;
  logs = [];

  onDisplayDetails() {
    this.showSecret = !this.showSecret;
    this.logs.push(new Date());
  }

  onResetUsername() {
    this.username = '';
  }

  getBgColor(log: any) {

  }

}
