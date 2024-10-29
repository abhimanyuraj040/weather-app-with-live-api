import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private httpClient:HttpClient) { }

  getWeatherData(cityName: string){
    this.httpClient.get(environment.weatherApiBaseUrl,{
      headers: new HttpHeaders()
      .set(environment.xRapidapihostHeaderName, environment.xRapidapihostHeaderValue)
      .set(environment.xRapidapikeyHeaderName, environment.xRapidapikeyHeaderValue),
      params: new HttpParams()
      .set('place', cityName)
      .set('units', 'K')
      .set('mode', 'json')
    })
  }
}
