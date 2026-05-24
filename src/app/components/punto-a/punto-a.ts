import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { PeliculaService } from '../../services/pelicula'; 

@Component({
  selector: 'app-punto-a',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './punto-a.html', 
  styleUrl: './punto-a.css'
})
export class PuntoA implements OnInit {

  listaPeliculas: any[] = []; 

  constructor(private _peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.cargarPeliculas();
  }

  cargarPeliculas() {
    this._peliculaService.obtenerPeliculas().subscribe({
      next: (datosQueLlegan) => {
        console.log('¡Llegaron las películas!', datosQueLlegan);
        this.listaPeliculas = datosQueLlegan; 
      },
      error: (error) => {
        console.error('Hubo un error al conectar con la API', error);
      }
    });
  }
}