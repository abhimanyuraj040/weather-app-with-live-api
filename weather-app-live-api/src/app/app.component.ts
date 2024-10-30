import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherServiceService } from './services/weather-service.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  constructor(private weatherServiceService: WeatherServiceService){
    
  }

  weatherData?: WeatherData;
  country:string = '';
  temp:any ;
  temp_min:any;
  temp_max:any;
  feels_like: any;
  desc:string = '';
  
  
  ngOnInit(): void {
    this.weatherServiceService.getWeatherData('London').subscribe({
      next: (response: WeatherData) => {
        this.weatherData = response;
        console.log(this.weatherData);
        this.country = this.weatherData.name;
        this.temp = this.weatherData.main.temp;
        this.temp_min = this.weatherData.main.temp_min;
        this.temp_max = this.weatherData.main.temp_max;
        this.feels_like = this.weatherData.main.feels_like;
        this.desc = this.weatherData.weather[0].description;

      }
    });
  }
}
