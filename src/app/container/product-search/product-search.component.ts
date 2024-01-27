import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent {
  searchString: string = '';
  @ViewChild('searchInput') searchInput!: ElementRef;
  @Output() searchedString: EventEmitter<string> = new EventEmitter<string>();

  searchProductChange() {
    this.searchString = this.searchInput.nativeElement.value;
    this.searchedString.emit(this.searchString);
  }
}
