import { Component } from '@angular/core';
import { inject, signal } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../../models/Product.model';
import { HeaderAdminComponent } from '../../components/header-admin/header-admin.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HeaderAdminComponent, FooterComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  private productService = inject(ProductService)

  products: Product[] = []

ngOnInit() {
  
  this.productService.productList().subscribe({
    next: (products) => {
      (this.products = products);
    },error: error => {
      console.log(error)
    }
  })
  
}

  footer = signal(true);

}
