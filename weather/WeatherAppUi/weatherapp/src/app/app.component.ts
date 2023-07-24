import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {WeatherService} from 'src/services/weatherservice'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  city: string = '';
  weatherData: any;
  
  constructor(private weatherService: WeatherService) { }


  findWeather(): void {
    if (this.city) {
      debugger
      this.weatherService.getWeatherByCity(this.city)
        .subscribe(data => {
          this.weatherData = data;
          console.log(data);
        });
    }
  }


}
 
 


