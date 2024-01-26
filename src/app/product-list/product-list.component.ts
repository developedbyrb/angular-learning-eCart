import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  productDetails = {
    name: 'iPhone',
    color: 'Silver',
    price: 999,
    discount: 8.7,
    inStock: 5,
    image: '/assets/images/iphone.jpg'
  }

  getDiscountPrice() {
    return this.productDetails.price - (this.productDetails.price * this.productDetails.discount / 100);
  }
}
