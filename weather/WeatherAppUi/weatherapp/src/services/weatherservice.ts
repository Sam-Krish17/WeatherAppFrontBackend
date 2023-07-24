import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class WeatherService {
   
    private apiUrl = 'http://localhost:3000/api/weather'; 

    constructor(private http: HttpClient) { }
  
    getWeatherByCity(city: string): Observable<any> {
      const url = `${this.apiUrl}?city=${city}`;
      return this.http.get<any>(url);
    }
}