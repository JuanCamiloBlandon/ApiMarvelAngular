import { Component, OnInit } from '@angular/core';
import {MarvelService} from '../../services/marvel.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private marvelService: MarvelService, private router: Router) { }

  selectOption(option: string){
    this.marvelService.setSelect(option);
  }

  redirectToTabla() {
    this.router.navigate(['/tabla']);
  }
  
  

  ngOnInit(): void {
  }

}
