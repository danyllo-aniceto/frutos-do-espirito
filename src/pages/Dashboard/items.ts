import amor from "../../assets/amor.jfif";
import alegria from "../../assets/alegria.jfif";
import paz from "../../assets/paz.jfif";
import longanimidade from "../../assets/lonaganimidade.jfif";
import benignidade from "../../assets/benignidade.jfif";
import bondade from "../../assets/bondade.jfif";
import fidelidade from "../../assets/fidelidade.jfif";
import mansidao from "../../assets/mansidao.jfif";
import dominioproprio from "../../assets/dominioproprio.jfif";
import { messageAmor } from "./messageAmor";

const items = [
  {
    titulo: "Amor",
    imagemUrl: `${amor}`,
    descricao:
      "Amor como fruto do Espírito: amor altruísta e incondicional, refletindo o amor divino.",
    cor: "rgb(216, 9, 20), rgb(221, 59, 68), rgb(216, 9, 20)",
    mensagem: messageAmor,
  },
  {
    titulo: "Alegria",
    imagemUrl: `${alegria}`,
    descricao:
      "Alegria como fruto do Espírito: contentamento e felicidade interior, independentes das circunstâncias externas.",
    cor: "#ffd900, #f7eb4c, #ffd900",
  },
  {
    titulo: "Paz",
    imagemUrl: `${paz}`,
    descricao:
      "Paz como fruto do Espírito: tranquilidade interior e harmonia com Deus e os outros.",
    cor: "#888888, #B0B0B0, #888888",
  },
  {
    titulo: "Longanimidade",
    imagemUrl: `${longanimidade}`,
    descricao:
      "Longanimidade como fruto do Espírito: paciência perseverante diante das dificuldades e das pessoas difíceis.",
    cor: "#007bff, #00bfff, #007bff",
  },
  {
    titulo: "Benignidade",
    imagemUrl: `${benignidade}`,
    descricao:
      "Benignidade como fruto do Espírito: bondade e gentileza em atitudes e ações.",
    cor: "#00da0b, #41fa4a, #00da0b",
  },
  {
    titulo: "Bondade",
    imagemUrl: `${bondade}`,
    descricao:
      "Bondade como fruto do Espírito: disposição em fazer o bem e agir com generosidade.",
    cor: "#f731ab, #f85cbc, #f731ab",
  },
  {
    titulo: "Fidelidade",
    imagemUrl: `${fidelidade}`,
    descricao:
      "Fidelidade como fruto do Espírito: lealdade e constância em relação a Deus e aos outros.",
    cor: "#ff3c00, #fa6b3f, #ff3c00",
  },
  {
    titulo: "Mansidão",
    imagemUrl: `${mansidao}`,
    descricao:
      "Mansidão como fruto do Espírito: suavidade, humildade e controle sobre a própria força.",
    cor: "#15af98, #37ebd0, #15af98",
  },
  {
    titulo: "Domínio Próprio",
    imagemUrl: `${dominioproprio}`,
    descricao:
      "Domínio próprio como fruto do Espírito: autocontrole e disciplina sobre desejos e ações.",
    cor: "#8c00ff, #a646f5, #8c00ff",
  },
];

export default items;
