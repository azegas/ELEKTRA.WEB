import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculationsService {
  constructor(private http: HttpClient) {}
  
  private apiUrl = environment.apiUrl + '/calculations';

  public get(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
