import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class MarvelService {

  private refreshComicsSubject = new Subject<void>();
  refreshComics$ = this.refreshComicsSubject.asObservable();
  baseURL: string = 'https://gateway.marvel.com:443/v1/public/'
  apiKey: string = '?apikey=4d633242639ea36ed8c5063fc630b121'
  select: string = 'events'
  id: string
  constructor(public http: HttpClient) { }

  public getDynamicText(){
    return this.select
  }

  public refreshComics() {
    this.refreshComicsSubject.next();
  }

  public setId(id: string){
    this.id = id
  }

  public setSelect(option: string){
    this.select = option
    console.log(this.select)
    this.refreshComics();
  }

  public getComics() {

    return this.http.get(this.baseURL+this.select+this.apiKey)
  }

  public getComic() {

    return this.http.get(this.baseURL+this.select+'/'+this.id+'?apikey=4d633242639ea36ed8c5063fc630b121')
  }

}


