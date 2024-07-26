import { Address } from './database-types';

export interface GroupedProduct {
  id: number;
  name: string;
  category: string;
  brand: string;
  options: Array<{ id: number; option: string; price: number }>;
  imageUrl: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  option: string;
  quantity: number;
  imageUrl: string;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  totalPrice: number;
  totalItems: number;
}

export interface AddressState {
  addresses: Address[];
  selectedAddress: Address | null;
}

export interface OrderState {
  items: CartItem[];
  totalPrice: number;
}

export interface OrderItem {
  id: number;
  order_date: Date;
  total_price: number;
  status: number;
}
