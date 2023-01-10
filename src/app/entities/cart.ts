import { Product } from "./product";

export interface Cart {
    cartId: number;
    items: Product[];
    totalPrice: number;
    user: string;    
}