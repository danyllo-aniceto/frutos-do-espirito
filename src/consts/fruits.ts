import { Fruit } from "./types";

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

import { keywordAlegria } from "./keywords/keywordAlegria";
import { keywordAmor } from "./keywords/keywordAmor";
import { keywordBenignidade } from "./keywords/keywordBenignidade";
import { keywordBondade } from "./keywords/keywordBondade";
import { keywordDominioProprio } from "./keywords/keywordDominioProprio";
import { keywordFidelidade } from "./keywords/keywordFidelidade";
import { keywordLonganimidade } from "./keywords/keywordLonganimidade";
import { keywordMansidao } from "./keywords/keywordMansidao";
import { keywordPaz } from "./keywords/keywordPaz";

import { situationAlegria } from "./situations/situationAlegria";
import { situationAmor } from "./situations/situationAmor";
import { situationBenignidade } from "./situations/situationBenignidade";
import { situationBondade } from "./situations/situationBondade";
import { situationDominioProprio } from "./situations/situationDominioProprio";
import { situationFidelidade } from "./situations/situationFidelidade";
import { situationLonganimidade } from "./situations/situationLonganimidade";
import { situationMansidao } from "./situations/situationMansidao";
import { situationPaz } from "./situations/situationPaz";

const fruits: Fruit[] = [
  {
    id: "1",
    name: "Amor",
    image: `${amor}`,
    description:
      "Amor como fruto do Espírito: amor altruísta e incondicional, refletindo o amor divino.",
    color: "#b10c1a, #d91115, #b10c1a",
    messages: messageAmor,
    keywords: keywordAmor,
    situations: situationAmor,
  },
  {
    id: "2",
    name: "Alegria",
    image: `${alegria}`,
    description:
      "Alegria como fruto do Espírito: contentamento e felicidade interior, independentes das circunstâncias externas.",
    color: "#f6a406, #f8c70b, #f6a406",
    messages: messageAlegria,
    keywords: keywordAlegria,
    situations: situationAlegria,
  },
  {
    id: "3",
    name: "Paz",
    image: `${paz}`,
    description:
      "Paz como fruto do Espírito: tranquilidade interior e harmonia com Deus e os outros.",
    color: "#888888, #B0B0B0, #888888",
    messages: messagePaz,
    keywords: keywordPaz,
    situations: situationPaz,
  },
  {
    id: "4",
    name: "Longanimidade",
    image: `${longanimidade}`,
    description:
      "Longanimidade como fruto do Espírito: paciência perseverante diante das dificuldades e das pessoas difíceis.",
    color: "#007bff, #00bfff, #007bff",
    messages: messageLonganimidade,
    keywords: keywordLonganimidade,
    situations: situationLonganimidade,
  },
  {
    id: "5",
    name: "Benignidade",
    image: `${benignidade}`,
    description:
      "Benignidade como fruto do Espírito: enfatiza a disposição de promover o bem e a paz, muitas vezes manifestada através de atos de generosidade e misericórdia.",
    color: "#26923a, #1dbe36, #26923a",
    messages: messageBenignidade,
    keywords: keywordBenignidade,
    situations: situationBenignidade,
  },
  {
    id: "6",
    name: "Bondade",
    image: `${bondade}`,
    description:
      "Bondade como fruto do Espírito: refere-se à qualidade de ser amável, compassivo e gentil em relação aos outros, refletindo uma disposição positiva e benevolente.",
    color: "#d21257, #f43280, #d21257",
    messages: messageBondade,
    keywords: keywordBondade,
    situations: situationBondade,
  },
  {
    id: "7",
    name: "Fidelidade",
    image: `${fidelidade}`,
    description:
      "Fidelidade como fruto do Espírito: lealdade e constância em relação a Deus e aos outros.",
    color: "#c15400, #ff8500, #c15400",
    messages: messageFidelidade,
    keywords: keywordFidelidade,
    situations: situationFidelidade,
  },
  {
    id: "8",
    name: "Mansidão",
    image: `${mansidao}`,
    description:
      "Mansidão como fruto do Espírito: suavidade, humildade e controle sobre a própria força.",
    color: "#15af98, #37ebd0, #15af98",
    messages: messageMansidao,
    keywords: keywordMansidao,
    situations: situationMansidao,
  },
  {
    id: "9",
    name: "Domínio Próprio",
    image: `${dominioproprio}`,
    description:
      "Domínio próprio como fruto do Espírito: autocontrole e disciplina sobre desejos e ações.",
    color: "#6a10b5, #833cbe, #6a10b5",
    messages: messageDominioProprio,
    keywords: keywordDominioProprio,
    situations: situationDominioProprio,
  },
];

export default fruits;
