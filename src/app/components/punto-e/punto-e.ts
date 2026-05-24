import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PuntoEService } from '../../services/punto-e';

@Component({
  selector: 'app-punto-e',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './punto-e.html',
  styleUrl: './punto-e.css'
})
export class PuntoE {
  ciudad: string = 'San Salvador de Jujuy';
  climaDatos: any = null;
  cargando: boolean = false;
  mensajeError: string = '';

  constructor(
    private _puntoEService: PuntoEService,
    private cdr: ChangeDetectorRef
  ) {}

  buscarClima() {
    if (!this.ciudad.trim()) return;

    this.cargando = true;
    this.climaDatos = null;
    this.mensajeError = '';
    this.cdr.detectChanges();

    this._puntoEService.obtenerClima(this.ciudad).subscribe({
      next: (datos) => {
        console.log("Datos del clima:", datos);
        this.climaDatos = datos;
        this.cargando = false;
        this.cdr.detectChanges(); // Actualizamos la vista
      },
      error: (error) => {
        console.error("Error al buscar:", error);
        this.cargando = false;
        this.mensajeError = 'No se encontró la ciudad. Verificá que esté bien escrita.';
        this.cdr.detectChanges();
      }
    });
  }
}