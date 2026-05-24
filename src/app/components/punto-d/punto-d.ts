import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'; 
import { PuntoDService } from '../../services/punto-d'; 

@Component({
  selector: 'app-punto-d',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './punto-d.html',
  styleUrl: './punto-d.css'
})
export class PuntoD {

  textoAEscuchar: string = 'Hola profe, este es el conversor de texto a voz del Punto D.';
  vozSeleccionada: string = 'alloy';
  audioUrl: SafeUrl | null = null;
  cargando: boolean = false;

  constructor(
    private _puntoDService: PuntoDService,
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer 
  ) {}

  generarAudio() {
    if (!this.textoAEscuchar.trim()) return;

    this.cargando = true;
    this.audioUrl = null; 
    this.cdr.detectChanges(); 

    this._puntoDService.convertirTexto(this.textoAEscuchar, this.vozSeleccionada).subscribe({
      next: (audioBlob: Blob) => {
        
        // Usamos el archivo recibido tal cual
        const objectUrl = URL.createObjectURL(audioBlob);
        
        // Lo mandamos al HTML
        this.audioUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
        
        this.cargando = false;
        this.cdr.detectChanges(); 

        // Obligamos a reproducir el audio
        const reproductorInvisible = new Audio(objectUrl);
        reproductorInvisible.play().then(() => {
          console.log("¡Audio reproduciéndose con éxito!");
        }).catch(err => {
          console.error("El navegador bloqueó el auto-play, pero el archivo está bien:", err);
        });

      },
      error: (error: any) => {
        console.error("Error al generar el audio:", error);
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }
}