import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl + '/devices';

  get(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getSingle(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  }
}