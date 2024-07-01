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
import { messageAlegria } from "./messageAlegria";

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
    color: "#eb1010, #f81033, #eb1010",
    messages: messageAmor,
  },
  {
    id: "2",
    name: "Alegria",
    image: `${alegria}`,
    description:
      "Alegria como fruto do Espírito: contentamento e felicidade interior, independentes das circunstâncias externas.",
    color: "#f7c900, #f1ff00, #f7c900",
    messages: messageAlegria,
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
    color: "#26923a, #1dbe36, #26923a",
    messages: [],
  },
  {
    id: "6",
    name: "Bondade",
    image: `${bondade}`,
    description:
      "Bondade como fruto do Espírito: disposição em fazer o bem e agir com generosidade.",
    color: "#f34a8e, #e86d87, #f34a8e",
    messages: [],
  },
  {
    id: "7",
    name: "Fidelidade",
    image: `${fidelidade}`,
    description:
      "Fidelidade como fruto do Espírito: lealdade e constância em relação a Deus e aos outros.",
    color: "#f17414, #ff8500, #f17414",
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
    color: "#6a10b5, #833cbe, #6a10b5",
    messages: [],
  },
];

export default fruits;
