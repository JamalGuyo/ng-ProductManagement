import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
// COMPONENTS
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
// ROUTE GUARD
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  declarations: [ProductDetailComponent, ProductListComponent],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule {}
