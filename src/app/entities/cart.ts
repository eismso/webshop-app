import { CartItem } from "./cartItem";

export class Cart {
    id: number;
    items: CartItem[];
    totalPrice: number;
    user: string;
    
    constructor(id: number, items: CartItem[], totalPrice:number, user: string) {}
}