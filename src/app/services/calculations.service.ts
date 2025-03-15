import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Calculation } from '../models/calculation';

@Injectable({
  providedIn: 'root',
})
export class CalculationsService {
  constructor(private http: HttpClient) {}
  
  private apiUrl = environment.apiUrl + '/calculations';

  public get(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  public post(data:Calculation): Observable<Calculation> {
    return this.http.post<Calculation>(this.apiUrl, data);
  }
}
