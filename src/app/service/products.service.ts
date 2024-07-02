import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products = signal([
      {
        title: "Perfume 1",
        description: "Perfume bueno",
        price: "60",
        image: "https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg?cs=srgb&dl=pexels-valeriya-1961791.jpg&fm=jpg"
      },
      {
        title: "Perfume 2",
        description: "Perfume muy bueno",
        price: "55",
        image: "https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg?cs=srgb&dl=pexels-valeriya-1961791.jpg&fm=jpg"
      },
      {
        title: "Perfume 3",
        description: "Perfume elegante",
        price: "75",
        image: "https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg?cs=srgb&dl=pexels-valeriya-1961791.jpg&fm=jpg"
      },
    ]
  )
}
