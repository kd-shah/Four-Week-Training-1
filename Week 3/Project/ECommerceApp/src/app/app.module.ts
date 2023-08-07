import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { CartComponent } from './Components/cart/cart.component';
import { AddToCartService } from './Services/add-to-cart.service';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AddToCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
