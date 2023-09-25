import { Component } from '@angular/core';
import { VentanaEmergenteService } from '../../services/ventana-emergente-service.service';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
})
export class WindowComponent {
  public buscarid:string;
  idComic: number = 0;
  public comics: Array<any> = [];
  constructor(private ventanaEmergenteService: VentanaEmergenteService, private comic: MarvelService) { }

  abrirVentana() {
    this.ventanaEmergenteService.abrirVentanaEmergente();
  }

  cerrarVentana() {
    this.ventanaEmergenteService.cerrarVentanaEmergente();
  }
  ngOnInit(): void {
    this.comic.getComic().subscribe((res:any) => {
      console.log('Respuesta', res);
      this.comics = res.data.results;
    });
  }

}
