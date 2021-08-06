import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './admin/category/category.component';
import { CateAddComponent } from './admin/cate-add/cate-add.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductAddComponent } from './admin/product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { ProductComponent } from './admin/product/product.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailComponent },

  { path: 'admin', component: DashboardComponent },
  { path: 'admin/products', component: ProductComponent },
  { path: 'admin/product/add', component: ProductAddComponent },
  { path: 'admin/product/:id/edit', component: ProductEditComponent },
  { path: 'admin/categories', component: CategoryComponent },
  { path: 'admin/category/add', component: CateAddComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
