import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../model/Article';
import { ArticleQuantityChange } from '../model/ArticleQuantityChange';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.sass'
})
export class ArticleItemComponent {
  @Input() public article: Article ;
  @Output() private quantityChange: EventEmitter<ArticleQuantityChange> = new EventEmitter();

  constructor() { }

  get isProductInStock(): boolean {
    return this.article.isOnSale === true;
  }

  incrementQuantity() {
    this.quantityChange.emit({article: this.article, changeInQuantity: 1});
  }

  decrementQuantity() {
    if (this.article.quantityInCart > 0) {
      this.quantityChange.emit({article: this.article, changeInQuantity: -1});
    }
  }
}
