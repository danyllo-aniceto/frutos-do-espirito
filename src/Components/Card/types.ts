import { Message } from "../../consts/types";

export interface ICardProps {
  id: string;
  name: string;
  image: string;
  color: string;
  description: string;
  messages: Message[];
}
