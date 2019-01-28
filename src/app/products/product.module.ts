import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list.component';
import { ProductResolver } from './product-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent, resolve: { product: ProductResolver } },
      // { path: 'products/:id', component: ProductDetailComponent, resolve: { product: 'productProvider' } },
      { path: 'products/:id/edit', component: ProductEditComponent, resolve: { product: ProductResolver } }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  providers: [
    ProductResolver,
    // {
    //   provide: 'productProvider',
    //   useValue: () => {
    //     return {
    //       id: 5,
    //       productName: 'AProduct',
    //       description: 'Test description for the AProduct'
    //     };
    //   }
    // }
  ]
})
export class ProductModule { }
