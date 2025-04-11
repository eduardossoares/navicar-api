export interface AdRequest {
  user_id: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  description: string;
  milage: string;
  color: string;
  city: string;
  phone: string;
  images?: string[];
}
