import { AxiosResponse } from 'axios';
import { api } from './axios';

interface User {
  id: string;
  product_name: string;
  product_quantity: number;
  product_value: string;
  email: string;
  name: string;
  address: string;
  pushitem: string;
}

export const postUser = (user: User): Promise<AxiosResponse<User>> => {
  return api.post('/product', { user });
};

export const getUser = (): Promise<AxiosResponse<User[]>> => {
  return api.get('/');
};
