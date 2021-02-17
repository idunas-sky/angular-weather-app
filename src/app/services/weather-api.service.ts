import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Alerts} from './models/alerts';
import {AlertTypes} from './models/alert-types';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) {
  }

  /*
    API Documentation
    https://www.weather.gov/documentation/services-web-api#/
   */

  public getAlerts(state: string): Observable<Alerts> {
    return this.http.get<Alerts>(`https://api.weather.gov/alerts?area=${state}`);
  }

  public getAlertTypes(): Observable<AlertTypes> {
    return this.http.get<AlertTypes>(`https://api.weather.gov/alerts/types`);
  }
}
