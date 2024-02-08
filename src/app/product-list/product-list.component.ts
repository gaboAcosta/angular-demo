import { Component } from '@angular/core';

import { CommonModule } from "@angular/common";
// import { products } from '../products';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [
      {
          id: 1,
          name: 'Phone XL',
          price: 799,
          description: 'A large phone with one of the best screens'
      },
      {
          id: 2,
          name: 'Phone Mini',
          price: 699,
          description: 'A great phone with one of the best cameras'
      },
      {
          id: 3,
          name: 'Phone Standard',
          price: 299,
          description: ''
      }
  ];

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
