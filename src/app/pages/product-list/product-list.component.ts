import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}
  prodcuts: any = [];
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.prodcuts = data.data.products;
      },
      error: (err) => console.log(err),
    });
  }
}
