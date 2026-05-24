import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuntoEService {
  private apiKey = '75e8be9b1d313ac8199e42329d1e69e5';
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private _http: HttpClient) { }

  obtenerClima(ciudad: string): Observable<any> {
    // Armamos la URL pidiendo el sistema métrico (Celsius) y el idioma español
    const url = `${this.baseUrl}?q=${ciudad}&appid=${this.apiKey}&units=metric&lang=es`;
    return this._http.get(url);
  }
}