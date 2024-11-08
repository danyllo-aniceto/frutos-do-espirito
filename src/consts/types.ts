export interface Keyword {
  id: string;
  name: string;
  type: "good" | "bad";
}

export interface Situation {
  id: string;
  text: string | string[];
}

export interface Message {
  id: string;
  title: string;
  author: string;
  instagram: string;
  verse: string | string[];
  text: string | string[];
}

export interface Fruit {
  id: string;
  name: string;
  image: string;
  color: string;
  description: string;
  messages: Message[];
  keywords?: Keyword[];
  situations?: Situation[];
}
