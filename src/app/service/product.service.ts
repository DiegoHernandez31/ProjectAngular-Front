import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = "http://localhost:3000/api/perfume"

  constructor(private http: HttpClient) {}

createProduct(formValues: any) {
  return this.http.post("http://localhost:3000/api/perfume", {
    name: formValues.name,
    price: formValues.price,
    description: formValues.description,
    concentration: formValues.concentration,
    category: formValues.category,
  }
)
}


productList() : Observable<Product[]> {
  return this.http.get<Product[]>(this.apiUrl);
}

getProduct(id: string) {
  return this.http.get("http://localhost:3000/api/perfume" + id)
}

}
/*updateProduct(formData) {
  return this.http.patch(
    "http://localhost:3000/api/products/" + id,
    { formData }
    )
}

  constructor() { }

  getCartItems() {
    return this.cartItems;
  }

  addItemToCart(product: any) {
    this.cartItems.push(product: any);
  }

  removeItemFromCart(product) {
    const index = this.cartItems.indexOf(product);
    if (index!== -1) {
      this.cartItems.splice(index, 1);
    }
  }
}
*/

