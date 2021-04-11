import { Injectable } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CartItem } from 'src/app/models/cartItem';
import { CartItems } from 'src/app/models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }


  addToCart(car:Car){
    let item=CartItems.find(c=>c.car.carName==car.carName);
    if(item){
      item.quantity+=1;
    }
    else {
      let cartItem=new CartItem();
      cartItem.car=car;
      cartItem.quantity=1;
      CartItems.push(cartItem);
    }
  }
  removeFromCart(car:Car){
    let item=CartItems.find(c=>c.car.carName==car.carName);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list():CartItem[]{
    return CartItems;
  }
}
