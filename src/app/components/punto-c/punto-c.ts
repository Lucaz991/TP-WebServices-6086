import { Component, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { PuntoCService } from '../../services/punto-c'; 

@Component({
  selector: 'app-punto-c',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './punto-c.html',
  styleUrl: './punto-c.css'
})
export class PuntoC {

  cantidad: number = 1;
  monedaOrigen: string = 'USD';
  monedaDestino: string = 'ARS';
  resultado: string = '';

  constructor(
    private _puntoCService: PuntoCService,
    private cdr: ChangeDetectorRef 
  ) {}

  convertir() {
    this.resultado = "Calculando...";
    this.cdr.detectChanges(); // Le avisamos a la pantalla que pusimos "Calculando..."

    this._puntoCService.convertirDivisa(this.cantidad, this.monedaOrigen, this.monedaDestino).subscribe({
      next: (datos) => {
        console.log("Respuesta de APILayer:", datos);
        if (datos && datos.result !== undefined) {
          this.resultado = `${datos.result.toFixed(2)} ${this.monedaDestino}`;
        } else {
          this.resultado = "Error en datos";
        }
        
        // Obligamos a mostrar el resultado sin esperar
        this.cdr.detectChanges(); 
      },
      error: (error) => {
        console.error("Error al convertir:", error);
        this.resultado = "Error de conexión";
        this.cdr.detectChanges(); // Actualizamos la pantalla si hay error
      }
    });
  }
}