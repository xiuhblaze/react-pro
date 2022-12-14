import { useContext } from "react";
import { productContext } from "./ProductCard";

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductImage = ({ img = '' }) => {
  const { product } = useContext(productContext);
  const imgToShow = img ? img : (product.img ? product.img : noImage);

  return (
    <img className={ styles.productImg} src={ imgToShow } alt="Product" />
  );
};