import amor from "../../src/assets/amor.jfif";
import alegria from "../../src/assets/alegria.jfif";
import paz from "../../src/assets/paz.jfif";
import longanimidade from "../../src/assets/lonaganimidade.jfif";
import benignidade from "../../src/assets/benignidade.jfif";
import bondade from "../../src/assets/bondade.jfif";
import fidelidade from "../../src/assets/fidelidade.jfif";
import mansidao from "../../src/assets/mansidao.jfif";
import dominioproprio from "../../src/assets/dominioproprio.jfif";
import { messageAmor } from "./messageAmor";

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
  messages: Message[]; // Garantindo que 'messages' seja sempre um array
}

const fruits: Fruit[] = [
  {
    id: "1",
    name: "Amor",
    image: `${amor}`,
    description:
      "Amor como fruto do Espírito: amor altruísta e incondicional, refletindo o amor divino.",
    color: "rgb(216, 9, 20), rgb(221, 59, 68), rgb(216, 9, 20)",
    messages: messageAmor,
  },
  {
    id: "2",
    name: "Alegria",
    image: `${alegria}`,
    description:
      "Alegria como fruto do Espírito: contentamento e felicidade interior, independentes das circunstâncias externas.",
    color: "#ffd900, #f7eb4c, #ffd900",
    messages: [],
  },
  {
    id: "3",
    name: "Paz",
    image: `${paz}`,
    description:
      "Paz como fruto do Espírito: tranquilidade interior e harmonia com Deus e os outros.",
    color: "#888888, #B0B0B0, #888888",
    messages: [],
  },
  {
    id: "4",
    name: "Longanimidade",
    image: `${longanimidade}`,
    description:
      "Longanimidade como fruto do Espírito: paciência perseverante diante das dificuldades e das pessoas difíceis.",
    color: "#007bff, #00bfff, #007bff",
    messages: [],
  },
  {
    id: "5",
    name: "Benignidade",
    image: `${benignidade}`,
    description:
      "Benignidade como fruto do Espírito: bondade e gentileza em atitudes e ações.",
    color: "#00da0b, #41fa4a, #00da0b",
    messages: [],
  },
  {
    id: "6",
    name: "Bondade",
    image: `${bondade}`,
    description:
      "Bondade como fruto do Espírito: disposição em fazer o bem e agir com generosidade.",
    color: "#f731ab, #f85cbc, #f731ab",
    messages: [],
  },
  {
    id: "7",
    name: "Fidelidade",
    image: `${fidelidade}`,
    description:
      "Fidelidade como fruto do Espírito: lealdade e constância em relação a Deus e aos outros.",
    color: "#ff3c00, #fa6b3f, #ff3c00",
    messages: [],
  },
  {
    id: "8",
    name: "Mansidão",
    image: `${mansidao}`,
    description:
      "Mansidão como fruto do Espírito: suavidade, humildade e controle sobre a própria força.",
    color: "#15af98, #37ebd0, #15af98",
    messages: [],
  },
  {
    id: "9",
    name: "Domínio Próprio",
    image: `${dominioproprio}`,
    description:
      "Domínio próprio como fruto do Espírito: autocontrole e disciplina sobre desejos e ações.",
    color: "#8c00ff, #a646f5, #8c00ff",
    messages: [],
  },
];

export default fruits;
