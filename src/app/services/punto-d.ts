import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuntoDService { 

  constructor(private _http: HttpClient) { }

  convertirTexto(texto: string, vozSeleccionada: string): Observable<Blob> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '19bec69818msh73771ceb052458cp1245a5jsn5ce8573f2f99',
      'X-RapidAPI-Host': 'open-ai-text-to-speech1.p.rapidapi.com',
      'Content-Type': 'application/json'
    });

    const body = {
      model: "tts-1",
      input: texto,
      voice: vozSeleccionada
    };

    return this._http.post('https://open-ai-text-to-speech1.p.rapidapi.com/', body, { 
      headers: headers, 
      responseType: 'blob' 
    });
  }
}