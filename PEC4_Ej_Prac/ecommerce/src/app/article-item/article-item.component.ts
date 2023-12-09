import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.sass'
})
export class ArticleItemComponent {
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() imageUrl: string = '';
  @Input() isOnSale: boolean = true;
  @Input() quantityInCart: number = 0;

  get isProductInStock(): boolean {
    return this.quantityInCart > 0;
  }

  incrementQuantity() {
    this.quantityInCart++;
  }

  decrementQuantity() {
    if (this.quantityInCart > 0) {
      this.quantityInCart--;
    }
  }
}
