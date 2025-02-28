import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl + '/welcome';

  public get(): Observable<any> {
    console.log('API URL:', this.apiUrl); // Log the API URL
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
