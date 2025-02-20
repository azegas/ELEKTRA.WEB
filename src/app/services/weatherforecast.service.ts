import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherforecastService {
  constructor() {}
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl + '/weatherForecast';

  public get(): Observable<any> {
    console.log('API URL:', this.apiUrl); // Log the API URL
    return this.http.get(this.apiUrl);
  }
}
