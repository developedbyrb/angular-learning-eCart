import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  searchedProduct: string = '';
  @ViewChild('ProductListComponent') productListComponent!: ProductListComponent;

  searchProduct(productName: string) {
    this.searchedProduct = productName;
    console.log(this.searchedProduct);
  }
}
