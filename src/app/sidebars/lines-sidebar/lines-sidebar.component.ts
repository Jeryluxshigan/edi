import { Component } from '@angular/core';

@Component({
  selector: 'app-lines-sidebar',
  templateUrl: './lines-sidebar.component.html',
  styleUrls: ['./lines-sidebar.component.scss']
})
export class LinesSidebarComponent {
  isSwitchOn = false;

  onSwitchChange(event: boolean) {
    this.isSwitchOn = event;
  }
}
