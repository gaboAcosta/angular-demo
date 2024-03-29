import { Component } from '@angular/core';
import { CartService } from "../cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.sass'
})
export class CartComponent {
  items = this.cartService.getItems()
  constructor(
    private cartService: CartService
  ) {}
}
