import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private url = 'https://imdb-top-100-movies.p.rapidapi.com/';

  // INYECTAMOS el HttpClient 
  constructor(private _http: HttpClient) { }

  // Creamos la función que el componente va a llamar
  obtenerPeliculas(): Observable<any> {
    
    // Armamamos credenciales para la API de RapidAPI 
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '19bec69818msh73771ceb052458cp1245a5jsn5ce8573f2f99',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    });

    // Hacemos peticion GET a la URL oficial de la API, pasando las credenciales en los headers
    return this._http.get(this.url, { headers: headers });
  }
}