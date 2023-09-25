import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent{
  textDinamic: string = 'events'
  public contenido: Array<any> = [];
  public refreshSubscription: Subscription;

  displayedColumns: string[] = ['id', 'title', 'description', 'end'];
  constructor(private marvelService: MarvelService) { }
  
  ngOnInit(): void {
    this.loadComics();
    this.refreshSubscription = this.marvelService.refreshComics$.subscribe(() => {
      this.loadComics();
      this.updateTextDinamic();
    });
  }

  updateTextDinamic(){
    this.textDinamic = this.marvelService.getDynamicText();
  }

  loadComics(): void {
    this.marvelService.getComics().subscribe((res:any) => {
      console.log('Respuesta', res);
      this.contenido = res.data.results;
    });
  }


}








