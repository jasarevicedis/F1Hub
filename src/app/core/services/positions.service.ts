import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Position } from '../models/Position';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  apiUrl = "https://api.openf1.org/v1/position?meeting_key=latest&session_key=latest&date=2024-12-08T12:06:56.922000+00:00";
  constructor(private http: HttpClient) {

  }

  getCurrentPositions(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
