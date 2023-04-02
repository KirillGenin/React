export interface ITitlePageContext {
  titlePage: string;
  setTitlePage: React.Dispatch<React.SetStateAction<string>>;
}

export type Product = {
  id?: number;
  title: string;
  brand: string;
  type: string;
  membrane: number;
  description: string;
  price: number;
  image: string;
};

export type Products = Product[];
