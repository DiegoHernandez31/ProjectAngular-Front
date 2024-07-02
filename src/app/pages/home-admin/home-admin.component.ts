import { Component, inject, signal } from '@angular/core';
import { HeaderAdminComponent } from '../../components/header-admin/header-admin.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductsService } from '../../service/products.service';
import { Router, RouterLinkWithHref } from '@angular/router'

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [HeaderAdminComponent, FooterComponent, ProductCardComponent, RouterLinkWithHref],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {

  productService = inject(ProductsService);

Products = this.productService.products;

footer = signal(true);

}
