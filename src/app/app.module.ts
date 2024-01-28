import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductSearchComponent } from './container/product-search/product-search.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { ProductFilterComponent } from './container/product-filter/product-filter.component';
import { ProductDetailsComponent } from './container/product-details/product-details.component';
import { ViewChildrenComponent } from './container/view-children/view-children.component';
import { FeatureProductComponent } from './container/feature-product/feature-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    TopHeaderComponent,
    ProductListComponent,
    ProductSearchComponent,
    ContainerComponent,
    ProductComponent,
    ProductFilterComponent,
    ProductDetailsComponent,
    ViewChildrenComponent,
    FeatureProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
