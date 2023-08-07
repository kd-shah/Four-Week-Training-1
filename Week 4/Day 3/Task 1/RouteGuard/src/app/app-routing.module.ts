import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { homeGuard } from './Guards/home.guard';

const routes: Routes = [
  {path: "home" , component: HomeComponent, canActivate : [homeGuard]},
  {path: "" , component: LoginComponent},
  {path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
