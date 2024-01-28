import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.scss']
})
export class ViewChildrenComponent {
  @ViewChildren('inputEl') inputEl!: QueryList<ElementRef>;
  fullName: string = '';

  getFullName() {
    let name = '';
    this.inputEl.forEach((element: ElementRef) => {
      name += element.nativeElement.value + ' ';
    });
    this.fullName = name.trim();
  }
}
