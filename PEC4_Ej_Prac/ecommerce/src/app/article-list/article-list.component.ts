import { Component } from '@angular/core';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { CommonModule } from '@angular/common';
import { ArticleQuantityChange } from '../model/ArticleQuantityChange';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleItemComponent, CommonModule],
  template: `<h1 class="title">Servicios de manicura</h1><div *ngFor="let article of articles">
  <app-article-item
    [article]="article"
    (quantityChange)="onQuantityChange($event)"
  ></app-article-item>
</div>`,
  styles: [
    `
    .title
        display: flex
        justify-content: center
        align-items: center
        color: green
    `
    
  ],
})
export class ArticleListComponent {
  articles = [
    {
      id: 1,
      name: 'Manicura semipermanente con nivelación',
      price: 20,
      imageUrl: 'assets/nails.jpg',
      isOnSale: true,
      quantityInCart: 0,
    },
    {
      id: 2,
      name: 'Manicura semipermanente',
      price: 16,
      imageUrl: 'assets/nails2.jpg',
      isOnSale: true,
      quantityInCart: 0,
    },
    {
      id: 3,
      name: 'Retirada de esmaltado y preparación de la uña',
      price: 8,
      imageUrl: 'assets/retirada.webp',
      isOnSale: false,
      quantityInCart: 0,
    },
  ];

  onQuantityChange(change: ArticleQuantityChange) {
    const article = this.articles.find(prod => change.article.id === prod.id);
  
    if (article) {
      article.quantityInCart += change.changeInQuantity;
    } else {
      console.error('Article not found.');
    }
  }
}
