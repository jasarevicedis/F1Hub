import { Component } from '@angular/core';
import { LiveGraphicsComponent } from "./live-graphics/live-graphics.component";
import { DashboardHeaderComponent } from "./dashboard-header/dashboard-header.component";
import { LayoutTrackerComponent } from "./layout-tracker/layout-tracker.component";
import { RaceControlComponent } from "./race-control/race-control.component";
import { CompareWindowComponent } from "./compare-window/compare-window.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LiveGraphicsComponent, DashboardHeaderComponent, LayoutTrackerComponent, RaceControlComponent, CompareWindowComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
