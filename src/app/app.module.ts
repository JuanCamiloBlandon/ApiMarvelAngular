import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component'

import { HttpClientModule } from '@angular/common/http';
import { MarvelService } from './services/marvel.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'; // Importa el módulo de botones
import { MatDialogModule } from '@angular/material/dialog';
import { WindowComponent } from './components/window/window.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'; // Importa el módulo de tabla de Angular Material
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { TablaComponent } from './components/tabla/tabla.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    NavbarComponent,
    TablaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
  ],
  providers: [
    MarvelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
