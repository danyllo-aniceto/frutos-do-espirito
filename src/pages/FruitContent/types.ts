// types.ts

export interface IMessageProps {
  tema: string;
  versiculo: string;
  texto: string;
}

export interface IFruitContentProps {
  title: string;
  description: string;
  imageUrl: string;
  color: string;
  messages: IMessageProps[];
}
