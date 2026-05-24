import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuntoBService } from '../../services/punto-b'; 

@Component({
  selector: 'app-punto-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto-b.html', 
  styleUrl: './punto-b.css'
})
export class PuntoB implements OnInit {

  listaMarcas: any[] = []; 
  listaModelos: any[] = []; 
  marcaSeleccionada: string = ''; 
  cargandoModelos: boolean = false; 
  modalAbierto: boolean = false; 

  constructor(
    private _puntoBService: PuntoBService,
    private cdr: ChangeDetectorRef // Inyectamos la herramienta para detectar cambios
  ) {}

  ngOnInit(): void {
    this.cargarMarcas();
  }

  cargarMarcas() {
    this._puntoBService.obtenerMarcas().subscribe({
      next: (datos) => {
        this.listaMarcas = datos;
        this.cdr.detectChanges(); // Actualizamos la vista
      },
      error: (error) => console.error(error)
    });
  }

  verModelos(idDeLaMarca: string, nombreDeLaMarca: string) {
    this.marcaSeleccionada = nombreDeLaMarca;
    this.listaModelos = []; 
    this.cargandoModelos = true; 
    this.modalAbierto = true; 

    this._puntoBService.obtenerModelos(idDeLaMarca).subscribe({
      next: (datos) => {
        this.listaModelos = datos; 
        this.cargandoModelos = false; 
        
        // Actualizamos la vista
        this.cdr.detectChanges(); 
      },
      error: (error) => {
        console.error(error);
        this.cargandoModelos = false;
        this.cdr.detectChanges();
      }
    });
  }

  cerrarModal() {
    this.modalAbierto = false;
  }
}