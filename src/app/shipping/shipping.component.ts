import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from "../cart.service";


interface ShippingInfo {
  type: string
  price: number
}

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.sass'
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Observable<ShippingInfo[]>

  constructor(
    private cartService: CartService
  ) {}
  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices()
  }
}
