import { Component } from '@angular/core';
import { DriverDataWindowComponent } from "./driver-data-window/driver-data-window.component";
import { DriverDiffWindowComponent } from "./driver-diff-window/driver-diff-window.component";

@Component({
  selector: 'app-compare-window',
  standalone: true,
  imports: [DriverDataWindowComponent, DriverDiffWindowComponent],
  templateUrl: './compare-window.component.html',
  styleUrl: './compare-window.component.scss'
})
export class CompareWindowComponent {

}
