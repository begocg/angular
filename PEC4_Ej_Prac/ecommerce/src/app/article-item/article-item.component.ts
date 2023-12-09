import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.sass'
})
export class ArticleComponent {
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() imageUrl: string = '';
  @Input() isOnSale: boolean = true;
  @Input() quantityInCart: number = 0;
}
