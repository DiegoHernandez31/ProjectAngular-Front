import { Component, Input } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router'

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() title = "";
  @Input() description = "";
  @Input() price = "";
  @Input() image = "";

}
