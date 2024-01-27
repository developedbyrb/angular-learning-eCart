import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent {
  searchString: string = '';

  @Output() searchedString: EventEmitter<string> = new EventEmitter<string>();

  searchProductChange(inputEl: HTMLInputElement) {
    console.log(inputEl);
    this.searchString = inputEl.value;
    this.searchedString.emit(this.searchString);
  }
}
