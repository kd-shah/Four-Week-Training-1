import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
// import { ProductsService } from './services/products.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { LoginComponent } from './login/login.component';
import { HomeGuard } from './gaurds/home.guard';
import { DataResolver } from './resolver/data.resolver';

const routes: Routes = [
  { path: '', component: LoginComponent, },
  {path: 'products', component: ProductListComponent, canActivate: [HomeGuard], resolve: {data: DataResolver}},
  // { path: '', component: ProductListComponent, },
  
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  {path: 'checkout', component:CheckoutComponent},
  {path: 'order-confirmation', component:OrderConfirmationComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'module1' , loadChildren: ()=>import('./module1/module1.module').then ((m)=>m.Module1Module)},
  {path: 'module2' , loadChildren: ()=>import('./module2/module2.module').then ((m)=>m.Module2Module)},
  { path: '**', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProductListComponent]
})
export class AppRoutingModule { }
