import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private selectedItems: any[] = [];

  setItems(items: any[]): void {
    this.selectedItems = items;
  }

  getItems(): any[] {
    return this.selectedItems;
  }

  clearItems() {
    this.selectedItems = [];
    return this.selectedItems;
  }
}
