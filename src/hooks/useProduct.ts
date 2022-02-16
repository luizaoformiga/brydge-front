import { useContext } from "react";
import { ProductContext } from "../context/productContext";

const useProduct = () => {
  const { productState, getUser, getUserRepos, getUserStarred } = useContext(
    ProductContext
  );

  return { productState, getUser, getUserRepos, getUserStarred };
};

export default useProduct;