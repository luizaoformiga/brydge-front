import { NextPage } from "next";
import { AxiosResponse } from "axios";
import { createContext, useCallback, useState } from "react";
import { OwnProps, Props } from "./repository";
import { api } from "../config/axios";

export const ProductContext = createContext<OwnProps>({} as OwnProps);

const ProductProvider: NextPage = ({ children }) => {
  const [productState, setProductState] = useState({
    id: "",
    product_name: "",
    product_quantity: 0,
    product_value: "",
    email: "",
    name: "",
    address: "",
    pushitem: "",
  });

  const getUser = (): void => {
    setProductState((prevState) => ({
      ...prevState,
    }));

    api
      .get(`/`)
      .then((data: AxiosResponse<Props>) => {
        setProductState((prevState) => ({
          ...prevState,
          user: {
            id: data.data.id,
            product_name: data.data.product_name,
            product_quantity: data.data.product_quantity,
            product_value: data.data.product_value,
            email: data.data.email,
            name: data.data.name,
            address: data.data.address,
            pushitem: data.data.pushitem,
          },
        }));
      })
      .finally(() => {
        setProductState((prevState) => ({
          ...prevState,
          loading: !prevState,
        }));
      })
      .catch((error: Error) => error);
  };

  const postUser = (user: Props): void => {
    api
      .post(`product`, { user })
      .then(({ data }) => {

        setProductState((prevState) => ({
          ...prevState,
          user: {
            id: data.data.id,
            product_name: data.data.product_name,
            product_quantity: data.data.product_quantity,
            product_value: data.data.product_value,
            email: data.data.email,
            name: data.data.name,
            address: data.data.address,
            pushitem: data.data.pushitem,
          },
        }));
      })
      .catch((error: Error) => error);
  };

  const contextValue: OwnProps = {
    productState,
    getUser: useCallback((): void => getUser(), []),
    postUser: useCallback((user: Props): void => postUser(user), []),
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
