import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WindowComponent } from '../components/window/window.component';

@Injectable({
  providedIn: 'root',
})
export class VentanaEmergenteService {
  
  constructor(private dialog: MatDialog) {}

  abrirVentanaEmergente(): void {
    this.dialog.open(WindowComponent, {
      width: '400px', // Personaliza el ancho de la ventana emergente
    });
  }

  cerrarVentanaEmergente(): void {
    this.dialog.closeAll();
  }
}
