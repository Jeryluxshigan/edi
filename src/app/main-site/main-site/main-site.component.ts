import { Component } from '@angular/core';

@Component({
  selector: 'app-main-site',
  templateUrl: './main-site.component.html',
  styleUrls: ['./main-site.component.scss']
})
export class MainSiteComponent {
  isSidebarOpen = false; // Define the property to track sidebar state

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen; // Define the method to toggle the sidebar
  }
  
}
