import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent , pathMatch:"full"},
  //{ path: 'products/:id', component: ProductDetailComponent },
  { path: 'newProduct', component: ProductCreateComponent, pathMatch:"full" },
  {
    path: 'edit/:id', component: ProductEditComponent, pathMatch:"full"
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
