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
      name: 'Popular Mechanics - Sep 1951',
      description: 'A mid-century magazine showcasing technology, DIY projects, and innovations of the era.',
      price: 500.99,
      image: 'assets/1.jpg',
      category: 'Books'
    },
    {
      id: 2,
      name: 'Popular Mechanics - Jan 2005',
      description: 'This issue focused on cutting-edge technology, gadgets, and engineering breakthroughs, covering topics like space exploration, robotics, and automotive advancements. It also featured practical tips for home improvement and DIY enthusiasts.',
      price: 300.99,
      image: 'assets/2.png',
      category: 'Books'
    },
    {
      id: 3,
      name: 'Popular Mechanics - Dec 1951',
      description: 'This issue featured articles on post-war innovations, emerging technologies, and futuristic gadgets, along with practical DIY projects and home improvement tips. It highlighted advancements in areas like transportation, electronics, and science.',
      price: 307.99,
      image: 'assets/3.png',
      category: 'Books'
    },
    {
      id: 4,
      name: 'Fatty Legs: A True Story',
      description: 'A True Story by Christy Jordan-Fenton and Margaret Pokiak-Fenton is a memoir about Margarets experiences in a Canadian residential school, where she faces racism, mistreatment, and cultural suppression. Despite the hardships, she draws strength from her identity and her desire to return home.',
      price: 679.99,
      image: 'assets/4.jpg',
      category: 'Books'
    },
    {
      id: 5,
      name: 'Out - Jan 1999',
      description: 'A magazine issue that likely covered topics related to LGBTQ+ culture, entertainment, and social issues, featuring articles, interviews, and reviews of films, music, and activism. It offered insights into the LGBTQ+ community during that time.',
      price: 345.99,
      image: 'assets/5.jpg',
      category: 'Books'
    },
    {
      id: 6,
      name: 'Popular Science - May 1872',
      description: 'This issue of Popular Science likely featured articles on the latest scientific discoveries, technological innovations, and advancements in fields like engineering, astronomy, and medicine, reflecting the rapid industrial and scientific progress of the late 19th',
      price: 500.99,
      image: 'assets/6.png',
      category: 'Books'
    },
    {
      id: 7,
      name: 'About the Art of Being Alone',
      description: 'About the Art of Being Alone explores solitude as a path to self-discovery, personal growth, and creativity, emphasizing the joy and fulfillment found in ones own company.',
      price: 345.99,
      image: 'assets/7.jpg',
      category: 'Books'
    },
    {
      id: 8,
      name: 'The Art of Being Alone',
      description: 'The Art of Being Alone emphasizes finding peace, self-discovery, and growth through solitude, focusing on embracing time alone to reflect, recharge, and nurture personal well-being.',
      price: 657.99,
      image: 'assets/8.jpg',
      category: 'Books'
    },
    {
      id: 9,
      name: 'Love',
      description: 'Love is a deep emotional connection and affection toward someone or something. It encompasses various forms, including romantic, familial, platonic, and self-love. Love involves care, respect, trust, and empathy, often bringing joy, fulfillment, and a sense of belonging.',
      price: 556.99,
      image: 'assets/9.jpg',
      category: 'Books'
    },
    {
      id: 10,
      name: 'Status Anxiety',
      description: 'Status Anxiety refers to the stress or insecurity people feel due to their social standing or perceived lack of status. It arises from the desire to be recognized, respected, or valued in society, often influenced by comparison with others. This anxiety can impact self-esteem and lead to a constant pursuit of validation or material success.',
      price: 433.89,
      image: 'assets/10.jpg',
      category: 'Books'
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