import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent {
  searchString: string = '';

  @Output() searchedString: EventEmitter<string> = new EventEmitter<string>();

  searchProductChange() {
    this.searchedString.emit(this.searchString);
  }
}
