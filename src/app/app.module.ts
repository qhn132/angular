import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './admin/product/product.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.modules'
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './admin/product-add/product-add.component';
import { ProductService } from './product.service';
import { HomeComponent } from './home/home.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './admin/category/category.component';
import { CateAddComponent } from './admin/cate-add/cate-add.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductAddComponent,
    HomeComponent,
    ProductEditComponent,
    NotFoundComponent,
    HeaderComponent,
    NavComponent,
    CategoryComponent,
    CateAddComponent,
    FooterComponent,
    ProductsComponent,
    DashboardComponent,
    HeaderAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule { }
