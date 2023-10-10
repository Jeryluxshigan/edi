import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-rules-engine',
  templateUrl: './rules-engine.component.html',
  styleUrls: ['./rules-engine.component.scss']
})
export class RulesEngineComponent {
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
      ruleno: 1,
      rulename:"Valid Customer No",
      rulediscription: "Cross Reference The Customer Number with m3 to ensure the customer number exist",
      value:"0",
      type:"Standed",
      ordersource: "",
      customer: 700500,
      status:"Active",
      bypass:"",
      
    },
    {
      ruleno: 1,
      rulename:"Valid Item No",
      rulediscription: "Cross Reference with m3 to ensure the exist M3 and its active",
      value:"0",
      type:"Standed",
      ordersource: "",
      customer: 700500,
      status:"Active",
      bypass:"",
      
    },
    {
      ruleno: 1,
      rulename:"Active Customer Status",
      rulediscription: "Ensure the Customer",
      value:"0",
      type:"Standed",
      ordersource: "",
      customer: 700500,
      status:"Active",
      bypass:"",
      
    },
  ]
}
