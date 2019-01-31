import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { MessageModule } from './messages/message.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductData } from './products/product-data';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    // Imports for loading & configuring the in-memory web api
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
    UserModule,
    MessageModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
