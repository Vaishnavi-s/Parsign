import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from "../app/components/header/header.component"
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {path:"header",component:HeaderComponent},
  {path:"",component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
