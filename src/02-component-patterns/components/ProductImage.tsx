import { CSSProperties, useContext } from "react";
import { productContext } from "./ProductCard";

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface Props {
  className?: string,
  img?: string,
  style?: CSSProperties,
};

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(productContext);
  const imgToShow = img ? img : (product.img ? product.img : noImage);

  return (
    <img className={ `${ styles.productImg } ${ className }`} style={ style } src={ imgToShow } alt="Product" />
  );
};