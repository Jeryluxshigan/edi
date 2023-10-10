import { Component, Input } from '@angular/core';
import { GridSize } from "@progress/kendo-angular-grid";

@Component({
  selector: 'app-button-container',
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.scss']
})
export class ButtonContainerComponent {
  @Input() isSidebarOpen: boolean = false;

  public opened = true;

  public close(): void {
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }

  isSwitchOn = false;

  onSwitchChange(event: boolean) {
    this.isSwitchOn = event;
  }

  public gridData =[
    {
      id:"001",
      line: 1,
      warning:"2",
      brand: "013",
      m3style:"ASVMA100",
      upc:"664911118225",
      customitem:"",
      m3item: "ASVMA100 M 60",
      color:"Medium",
      size: "",
      qty:"1",
    },
    {
      id:"002",
      line: 2,
      warning:"2",
      brand: "013",
      m3style:"ASVMA100",
      upc:"664911118225",
      customitem:"",
      m3item: "ASVMA100 M 60",
      color:"Medium",
      size: "",
      qty:"1",
    },
    {
      id:"003",
      line: 3,
      warning:"New Pricelist - Price list not updated",
      brand: "013",
      m3style:"ASVMA100",
      upc:"664911118225",
      customitem:"",
      m3item: "ASVMA100 M 60",
      color:"Medium",
      size: "",
      qty:"1",
    },
    {
      id:"004",
      line: 4,
      warning:"2",
      brand: "013",
      m3style:"ASVMA100",
      upc:"664911118225",
      customitem:"",
      m3item: "ASVMA100 M 60",
      color:"Medium",
      size: "",
      qty:"1",
    },
  ]

  public smallSize: GridSize = "small";

acceptDialogOpened = false;
rejectDialogOpened = false;
fullviewDialogOpened = false;

openAcceptDialog() {
  this.acceptDialogOpened = true;
}

closeAcceptDialog() {
  this.acceptDialogOpened = false;
}

openRejectDialog() {
  this.rejectDialogOpened = true;
}

closeRejectDialog() {
  this.rejectDialogOpened = false;
}

openFullviewDialog() {
  this.fullviewDialogOpened = true;
}

closeFullviewDialog() {
  this.fullviewDialogOpened = false;
}

}
