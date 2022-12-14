import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps} from "../components/ProductTitle";

// export interface ProductCardProps {
//   product: Product;
//   // children?: ReactElement;
//   children?: ReactElement | ReactElement[]; // puede recibir un solo elemento o un arreglo de varios
// };

export interface Product {
  id: string;
  title: string;
  img?: string;
};

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
};

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element,
  Buttons: (Props: ProductButtonsProps) => JSX.Element
  Image: (Props: ProductImageProps) => JSX.Element,
  Title: (Props: ProductTitleProps) => JSX.Element,
};