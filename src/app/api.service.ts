import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://swapi.co/api/';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<any> {
    return this.http.get(this.url + 'people/');
  }

  getFilm(url: string): Observable<any> {
    return this.http.get(url);
  }

  getPage(page: string) {
    return this.http.get(this.url + 'people/?page=' + page);
  }
}
