import { Component } from '@angular/core';


@Component({
  selector: 'app-main-site',
  templateUrl: './main-site.component.html',
  styleUrls: ['./main-site.component.scss']
})
export class MainSiteComponent {
  isSidebarOpen = false; // Corrected property name
  isLinesTabActive = true;
  isChargesTabActive = false;
  

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
 

  isDropdownOpen: boolean = false;

  // Function to toggle the dropdown visibility
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Function to handle logout action
  logout() {
    // Implement your logout logic here
    // For example, you can clear the user session and navigate to the login page.
  }
}
