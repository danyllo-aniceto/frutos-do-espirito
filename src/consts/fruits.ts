import amor from "../../src/assets/amor.jfif";
import alegria from "../../src/assets/alegria.jfif";
import paz from "../../src/assets/paz.jfif";
import longanimidade from "../../src/assets/longanimidade.jfif";
import benignidade from "../../src/assets/benignidad.jfif";
import bondade from "../../src/assets/bondade3.jfif";
import fidelidade from "../../src/assets/fidelidade.jfif";
import mansidao from "../../src/assets/mansidao.jfif";
import dominioproprio from "../../src/assets/dominioproprio.jfif";
import { messageAmor } from "./messages/messageAmor";
import { messageAlegria } from "./messages/messageAlegria";
import { messagePaz } from "./messages/messagePaz";
import { messageLonganimidade } from "./messages/messageLonganimidade";
import { messageBenignidade } from "./messages/messageBenignidade";
import { messageBondade } from "./messages/messageBondade";
import { messageFidelidade } from "./messages/messageFidelidade";
import { messageMansidao } from "./messages/messageMansidao";
import { messageDominioProprio } from "./messages/messageDominioProprio";

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
  keyword?: Keyword[];
  situation?: Situation[];
}

const fruits: Fruit[] = [
  {
    id: "1",
    name: "Amor",
    image: `${amor}`,
    description:
      "Amor como fruto do Espírito: amor altruísta e incondicional, refletindo o amor divino.",
    color: "#b10c1a, #d91115, #b10c1a",
    messages: messageAmor,
  },
  {
    id: "2",
    name: "Alegria",
    image: `${alegria}`,
    description:
      "Alegria como fruto do Espírito: contentamento e felicidade interior, independentes das circunstâncias externas.",
    color: "#f6a406, #f8c70b, #f6a406",
    messages: messageAlegria,
  },
  {
    id: "3",
    name: "Paz",
    image: `${paz}`,
    description:
      "Paz como fruto do Espírito: tranquilidade interior e harmonia com Deus e os outros.",
    color: "#888888, #B0B0B0, #888888",
    messages: messagePaz,
  },
  {
    id: "4",
    name: "Longanimidade",
    image: `${longanimidade}`,
    description:
      "Longanimidade como fruto do Espírito: paciência perseverante diante das dificuldades e das pessoas difíceis.",
    color: "#007bff, #00bfff, #007bff",
    messages: messageLonganimidade,
  },
  {
    id: "5",
    name: "Benignidade",
    image: `${benignidade}`,
    description:
      "Benignidade como fruto do Espírito: enfatiza a disposição de promover o bem e a paz, muitas vezes manifestada através de atos de generosidade e misericórdia.",
    color: "#26923a, #1dbe36, #26923a",
    messages: messageBenignidade,
  },
  {
    id: "6",
    name: "Bondade",
    image: `${bondade}`,
    description:
      "Bondade como fruto do Espírito: refere-se à qualidade de ser amável, compassivo e gentil em relação aos outros, refletindo uma disposição positiva e benevolente.",
    color: "#d21257, #f43280, #d21257",
    messages: messageBondade,
  },
  {
    id: "7",
    name: "Fidelidade",
    image: `${fidelidade}`,
    description:
      "Fidelidade como fruto do Espírito: lealdade e constância em relação a Deus e aos outros.",
    color: "#c15400, #ff8500, #c15400",
    messages: messageFidelidade,
  },
  {
    id: "8",
    name: "Mansidão",
    image: `${mansidao}`,
    description:
      "Mansidão como fruto do Espírito: suavidade, humildade e controle sobre a própria força.",
    color: "#15af98, #37ebd0, #15af98",
    messages: messageMansidao,
  },
  {
    id: "9",
    name: "Domínio Próprio",
    image: `${dominioproprio}`,
    description:
      "Domínio próprio como fruto do Espírito: autocontrole e disciplina sobre desejos e ações.",
    color: "#6a10b5, #833cbe, #6a10b5",
    messages: messageDominioProprio,
  },
];

export default fruits;
