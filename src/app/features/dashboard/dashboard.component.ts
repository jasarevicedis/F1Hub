import { Component } from '@angular/core';
import { LiveGraphicsComponent } from "./live-graphics/live-graphics.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LiveGraphicsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
