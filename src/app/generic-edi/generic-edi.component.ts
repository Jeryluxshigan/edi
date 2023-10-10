import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generic-edi',
  templateUrl: './generic-edi.component.html',
  styleUrls: ['./generic-edi.component.scss']
})
export class GenericEdiComponent {
  isSidebarOpen = false; // Corrected property name
  isLinesTabActive = true;
  isChargesTabActive = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  constructor(private route: ActivatedRoute) {
    // You can use this.route to access route information
    // and update the sidebar or body content conditionally.
  }

  public gridData =[
    {
      doc: 850,
      po:"Dilamal",
      Account: 435522,
      customerpo:"NA",
      control:"0001-4521",
      company: "NA",
      customer: "NA",
      invoice:"NA",
      order:"NA",
      shipment: "NA",
    },
    {
      doc: 850,
      po:"Dilamal",
      Account: 435522,
      customerpo:"NA",
      control:"0001-4521",
      company: "NA",
      customer: "NA",
      invoice:"NA",
      order:"NA",
      shipment: "NA",
    },
    {
      doc: 850,
      po:"Dilamal",
      Account: 435522,
      customerpo:"NA",
      control:"0001-4521",
      company: "NA",
      customer: "NA",
      invoice:"NA",
      order:"NA",
      shipment: "NA",
    },
  ]
}
