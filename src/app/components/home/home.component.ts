import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { VentanaEmergenteService } from '../../services/ventana-emergente-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  textDinamic: string = 'events'
  public comics: Array<any> = [];

  public refreshSubscription: Subscription;

  constructor(private marvelServcie: MarvelService, private ventanaEmergenteService: VentanaEmergenteService) {}
  
  updateTextDinamic(){
    this.textDinamic = this.marvelServcie.getDynamicText();
  }
  
  abrirVentana(id: string) {
    this.marvelServcie.setId(id)
    this.ventanaEmergenteService.abrirVentanaEmergente();

  }

  ngOnInit(): void {
    this.loadComics();
    this.refreshSubscription = this.marvelServcie.refreshComics$.subscribe(() => {
      this.loadComics();
      this.updateTextDinamic();
    });
  }

  loadComics(): void {
    this.marvelServcie.getComics().subscribe((res:any) => {
      console.log('Respuesta', res);
      this.comics = res.data.results;
    });
  }
}
