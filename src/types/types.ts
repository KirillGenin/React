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

export type FormValues = {
  firstName: string;
  deliveryDate: string;
  product: string;
  options: string[];
  payment: string;
  image: FileList | string;
};

export type PropsForm = {
  cards: FormValues[];
  setCards: React.Dispatch<React.SetStateAction<FormValues[]>>;
};

export type PropsCardForm = {
  card: FormValues;
};

export interface IData {
  id: number;
  name: string;
  image: string;
}

export interface ResponseData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: {
    name: string;
  };
  image: string;
  episode: string[];
}

export interface IHero {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  location: string;
  image: string;
}
