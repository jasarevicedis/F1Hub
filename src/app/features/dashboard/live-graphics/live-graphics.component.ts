import { Component } from '@angular/core';
import { PositionsService } from '../../../core/services/positions.service';

@Component({
  selector: 'app-live-graphics',
  standalone: true,
  imports: [],
  templateUrl: './live-graphics.component.html',
  styleUrl: './live-graphics.component.scss'
})
export class LiveGraphicsComponent {
  drivers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  positionsList: any[] = []

  constructor(private positionsService: PositionsService ){}

  ngOnInit(): void {
    this.positionsService.getCurrentPositions().subscribe((data) => {
      this.positionsList = data;
    },
    )
  }

  getCurrentPositions(): any {
    this.positionsService.getCurrentPositions();
  }
}
