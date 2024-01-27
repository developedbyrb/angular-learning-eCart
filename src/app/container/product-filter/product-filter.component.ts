import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {
  @Input() allProductCount: number = 0;
  @Input() inStockCount: number = 0;
  @Input() outOfStockCount: number = 0;
  selectedRadioInput: string = 'all';

  @Output() selectedRadioFilter: EventEmitter<string> = new EventEmitter<string>();

  changeFilterSelection() {
    console.log('filter change from child!');
    this.selectedRadioFilter.emit(this.selectedRadioInput);
  }
}
