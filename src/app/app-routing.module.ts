import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { SelectiveStrategy } from './sevective-strategy.service';
import { AuthGuard } from './user/auth-guard.service';

const ROUTES = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'products',
    canActivate: [AuthGuard],
    data: { preload: true },
    loadChildren: './products/product.module#ProductModule'
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { enableTracing: true, preloadingStrategy: SelectiveStrategy })
  ],
  providers: [
    SelectiveStrategy
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
