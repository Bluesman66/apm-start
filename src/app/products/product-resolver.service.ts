import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Product } from './product';
import { ProductService } from './product.service';

@Injectable()
export class ProductResolver implements Resolve<Product> {

  constructor(private productService: ProductService,
    private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id = +route.paramMap.get('id');
    if (isNaN(id)) {
      console.log(`Product id was not a number ${id}`);
      this.router.navigate(['/products']);
      return of(null);
    }
    return this.productService.getProduct(id)
      .pipe(
        map(product => {
          if (product) {
            return product;
          }
          console.log(`Product was not found ${id}`);
          this.router.navigate(['/products']);
          return null;
        }),
        catchError(error => {
          console.error(`Retrieval error: ${error}`);
          this.router.navigate(['/products']);
          return of(null);
        })
      );
  }
}
