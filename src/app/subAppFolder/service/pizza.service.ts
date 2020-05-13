import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, Item } from '../reactiveForm-component/reactiveForm.component';
import { Observable } from 'rxjs'

@Injectable()
export class PizzaService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return (this.http.get('http://localhost:3000/products') as Observable<Product[]>);
  }

  getMenu(): Observable<Item[]> {
   return this.http.get<Item[]>('http://localhost:3000/menu');
  }
}
