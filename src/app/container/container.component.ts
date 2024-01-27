import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  searchedProduct: string = '';

  searchProduct(productName: string) {
    this.searchedProduct = productName;
    console.log(this.searchedProduct);
  }
}
