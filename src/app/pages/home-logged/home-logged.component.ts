import { Component, inject, signal } from '@angular/core';
import { HeaderLoggedComponent } from '../../components/header-logged/header-logged.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductsService } from '../../service/products.service';
import { Router, RouterLinkWithHref } from '@angular/router'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderLoggedComponent, FooterComponent, ProductCardComponent, RouterLinkWithHref],
  templateUrl: './home-logged.component.html',
  styleUrl: './home-logged.component.css'
})
export class HomeLoggedComponent {

  productService = inject(ProductsService);

Products = this.productService.products;

footer = signal(true);

}
