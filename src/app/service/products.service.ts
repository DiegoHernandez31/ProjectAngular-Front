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
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1961791%2Fpexels-photo-1961791.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-valeriya-1961791.jpg%26fm%3Djpg&tbnid=-CzWB8cL0rk6mM&vet=12ahUKEwiF34aatfyGAxWRA2IAHXx4AAYQMygFegQIARBP..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fperfume%2F&docid=_nmpV_0HT93k9M&w=4181&h=6271&q=perfume%20wallpaper&client=opera&ved=2ahUKEwiF34aatfyGAxWRA2IAHXx4AAYQMygFegQIARBP"
      },
      {
        title: "Perfume 2",
        description: "Perfume muy bueno",
        price: "55",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1961791%2Fpexels-photo-1961791.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-valeriya-1961791.jpg%26fm%3Djpg&tbnid=-CzWB8cL0rk6mM&vet=12ahUKEwiF34aatfyGAxWRA2IAHXx4AAYQMygFegQIARBP..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fperfume%2F&docid=_nmpV_0HT93k9M&w=4181&h=6271&q=perfume%20wallpaper&client=opera&ved=2ahUKEwiF34aatfyGAxWRA2IAHXx4AAYQMygFegQIARBP"
      },
      {
        title: "Perfume 3",
        description: "Perfume elegante",
        price: "75",
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1961791%2Fpexels-photo-1961791.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-valeriya-1961791.jpg%26fm%3Djpg&tbnid=-CzWB8cL0rk6mM&vet=12ahUKEwiF34aatfyGAxWRA2IAHXx4AAYQMygFegQIARBP..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fperfume%2F&docid=_nmpV_0HT93k9M&w=4181&h=6271&q=perfume%20wallpaper&client=opera&ved=2ahUKEwiF34aatfyGAxWRA2IAHXx4AAYQMygFegQIARBP"
      },
    ]
  )
}
