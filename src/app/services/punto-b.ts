import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuntoBService {

  constructor(private _http: HttpClient) { }

  //  Buscamos todas las marcas
  obtenerMarcas(): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '19bec69818msh73771ceb052458cp1245a5jsn5ce8573f2f99',
      'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
    });
    const urlMarcas = 'https://car-specs.p.rapidapi.com/v2/cars/makes';
    return this._http.get(urlMarcas, { headers: headers });
  }

  // Buscamos los modelos usando el ID de la marca
  obtenerModelos(idMarca: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '19bec69818msh73771ceb052458cp1245a5jsn5ce8573f2f99',
      'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
    });
    // Metemos el IdMarca en la URL oficial para obtener modelos
    const urlModelos = `https://car-specs.p.rapidapi.com/v2/cars/makes/${idMarca}/models`;
    return this._http.get(urlModelos, { headers: headers });
  }
}