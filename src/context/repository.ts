export type Props = {
  id: string;
  product_name: string;
  product_quantity: number;
  product_value: string;
  email: string;
  name: string;
  address: string;
  pushitem: string;
};

export type OwnProps = {
  productState: {
    id: string;
    product_name: string;
    product_quantity: number;
    product_value: string;
    email: string;
    name: string;
    address: string;
    pushitem: string;
  };
  getUser: (user: Props) => void;
  postUser: (user: Props) => void;
};
