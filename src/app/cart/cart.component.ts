import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
// import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service';
import { ProductService } from '../services/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { product } from '../product/product.component';


export interface Cart {
  product:any;
  price: number;
  quantity: number;
  totalPrice:number;
 
}

let cartData: Cart[] = [];

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent  implements OnInit{
cartData:any;
cartId:any=localStorage.getItem('cartId');
displayedColumns: string[] = [ 'product', 'price', 'quantity','delete'];
  cartTotalPrice:number;
productId:number;
  constructor(private cartService:CartService, private orderService:OrderService,private productService:ProductService){ }

ngOnInit(): void {
  // this.fetchCart(); 
  this.fetchCartById(); 
  // this.placeOrder(this.cartId);
  this.getCart();
}
 
// fetchCart(){
//   this.cartService.getCartProduct().subscribe((products)=>{  
// console.log(products)
// // this.cartData=products;
// // console.log(cartData)
//   })
// }

placeOrder(cartId:number){
  this.orderService.placeOrder(this.cartId).subscribe((order)=>{
// console.log(order);
  })
}

dataSource: any=cartData;
fetchCartById(){
  this.cartService.getCartProductById().subscribe(
    (cart:any)=>{
      console.log(cart)
cartData=cart
console.log(cartData);
this.dataSource=new MatTableDataSource(cartData);
  })
}




getCart(){
  this.cartService.getCartById().subscribe((tp)=>{
    console.log(tp);
    this.cartTotalPrice=tp.totalPrice;
  });
}
}
