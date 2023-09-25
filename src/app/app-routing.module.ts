import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaComponent } from './components/tabla/tabla.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'tabla',
    component: TablaComponent
  },
  {
    path:'',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
