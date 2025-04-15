export interface CreateAdRequest {
  user_id: string;
  brand: string;
  model: string;
  year: string;
  price: string;
  description: string;
  milage: string;
  color: string;
  city: string;
  phone: string;
  images?: string[];
}

export interface ReadAdRequest {
  id: string;
}

export interface UpdateAdRequest extends CreateAdRequest {
  id: string;
}

export interface RemoveAdRequest {
  user_id: string;
  id: string;
}
