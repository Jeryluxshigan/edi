import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent {
  isSidebarOpen = false; // Corrected property name
  isLinesTabActive = true;
  isChargesTabActive = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  public gridData =[
    {
      id:"001",
      status: "Rejected",
      line: 1,
      style:"RKC071",
      colorwidth: "Wide",
      size:11.0,
      fit:"",
      brand: "011",
      m3item: "RKCO71 W 110",
      customitem:"",
      upcgtin:"71856268253",
      chargecode: 80,
      description:"Vas Charges",
      chargevalue: 624
    },
    {
      id:"002",
      status: "Rejected",
      line: 1,
      style:"RKC071",
      colorwidth: "Wide",
      size:11.0,
      fit:"",
      brand: "011",
      m3item: "RKCO71 W 110",
      customitem:"",
      upcgtin:"71856268253",
      chargecode: 80,
      description:"Vas Charges",
      chargevalue: 624
    },
    {
      id:"003",
      status: "Rejected",
      line: 1,
      style:"RKC071",
      colorwidth: "Wide",
      size:11.0,
      fit:"",
      brand: "011",
      m3item: "RKCO71 W 110",
      customitem:"",
      upcgtin:"71856268253",
      chargecode: 80,
      description:"Vas Charges",
      chargevalue: 624
    }
  ]

  public opened = true;

  public close(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }
}
