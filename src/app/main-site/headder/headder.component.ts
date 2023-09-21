import { Component } from '@angular/core';
import { bellIcon, menuIcon, SVGIcon } from "@progress/kendo-svg-icons";
import { chevronDownIcon } from "@progress/kendo-svg-icons";

@Component({
  selector: 'app-headder',
  templateUrl: './headder.component.html',
  styleUrls: ['./headder.component.scss']
})
export class HeadderComponent {
  public bellIcon: SVGIcon = bellIcon;
  public chevronDownIcon: SVGIcon = chevronDownIcon;

}
