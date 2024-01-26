import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSearchComponent } from './product-list/product-search/product-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    TopHeaderComponent,
    ProductListComponent,
    ProductSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
