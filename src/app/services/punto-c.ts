import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuntoCService {

  constructor(private _http: HttpClient) { }

  convertirDivisa(cantidad: number, origen: string, destino: string): Observable<any> {

    const headers = new HttpHeaders({
      'apikey': 'LlA12oRbvNXarMXdmQ9OLFqbLymjiYZq' 
    });

    const url = `https://api.apilayer.com/currency_data/convert?to=${destino}&from=${origen}&amount=${cantidad}`;

    return this._http.get(url, { headers: headers });
  }
}