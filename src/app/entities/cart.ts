import { CartItem } from "./cartItem";

export interface Cart {
    id: number;
    items: CartItem[];
    totalPrice: number;
    user: string;    
}