import { Component } from '@angular/core';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleItemComponent, CommonModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.sass'
})
export class ArticleListComponent {
  articles = [
    {
      name: 'Manicura semipermanente con nivelación',
      price: 20,
      imageUrl: 'assets/nails.jpg',
      isOnSale: true,
      quantityInCart: 0,
    },
    {
      name: 'Manicura semipermanente',
      price: 16,
      imageUrl: 'assets/nails2.jpg',
      isOnSale: true,
      quantityInCart: 0,
    },
    {
      name: 'Retirada de esmaltado y preparación de la uña',
      price: 8,
      imageUrl: 'assets/retirada.webp',
      isOnSale: false,
      quantityInCart: 0,
    },
  ];
}
