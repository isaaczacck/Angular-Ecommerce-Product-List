import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Product } from '../Models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Deadpool',
      description: '',
      price: 1444.99,
      image: 'assets/deadpool .jfif',
      category: ''
    },
    {
      id: 2,
      name: 'wolverine',
      description: '',
      price: 1290.99,
      image: 'assets/wolverine.jfif',
      category: ''
    },
    {
      id: 3,
      name: 'moon knight',
      description: '',
      price: 1900.99,
      image: 'assets/moon knight.jfif',
      category: ''
    },
    {
      id: 4,
      name: 'Venom',
      description: 'Funko Pop',
      price: 1909.99,
      image: 'assets/venom.jfif',
      category: 'Toy'
    },
    {
      id: 5,
      name: 'Ironman',
      description: 'Funko Pop',
      price: 2400.99,
      image: 'assets/ironman.jfif',
      category: 'Stationery'
    },
    {
      id: 6,
      name: 'Superman',
      description: 'Funko Pop',
      price: 2990.99,
      image: 'assets/superman.jfif',
      category: 'Toy'
    },
    {
      id: 7,
      name: 'Joker',
      description: 'Funko Pop',
      price: 2079.99,
      image: 'assets/joker.jfif',
      category: 'Toy'
    },
    {
      id: 8,
      name: 'Gwen',
      description: 'Funko Pop',
      price: 2084.99,
      image: 'assets/gwen.jfif',
      category: 'Toy'
    },
    {
      id: 9,
      name: 'Spiderman',
      description: 'Funko Pop',
      price: 2999.99,
      image: 'assets/spiderman.jfif',
      category: 'Toy'
    },
    {
      id: 10,
      name: 'Batman',
      description: 'Funko Pop',
      price: 9934.99,
      image: 'assets/batman.jfif',
      category: 'Toy'
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  addProduct(product: Product): Observable<Product> {
    this.products.push(product);
    return of(product);
  }
}