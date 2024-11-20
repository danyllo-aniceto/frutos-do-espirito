// TutorialModal.tsx
import React, { MouseEvent, useRef, useState } from "react";
import {
  CloseButton,
  ContainerPrint,
  ContentFruit,
  ContentPrint,
  ContentText,
  FruitImage,
  Name,
  ModalContainer,
  Overlay,
  Text,
  TextArea,
  Title,
} from "./styles";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Fruit, Keyword, Situation } from "../../consts/types";

interface TutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
  fruit: Fruit | null;
  keyword: Keyword | null;
  situation: Situation | null;
}

export const ModalCreateText: React.FC<TutorialModalProps> = ({
  isOpen,
  onClose,
  fruit,
  keyword,
  situation,
}) => {
  if (!isOpen) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [userText, setUserText] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const contentRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [downloadFormat, setDownloadFormat] = useState("pdf");

  const handleDownload = async () => {
    if (!contentRef.current) return;

    try {
      const canvas = await html2canvas(contentRef.current, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      if (downloadFormat === "pdf") {
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const imgProps = pdf.getImageProperties(imgData);
        const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight);
        pdf.save("fruto-espirito.pdf");
      } else if (downloadFormat === "image") {
        const link = document.createElement("a");
        link.href = imgData;
        link.download = "fruto-espirito.png";
        link.click();
      }
    } catch (error) {
      console.error("Erro ao gerar o arquivo:", error);
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const handleInput = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  const handleModalClick = (e: MouseEvent) => e.stopPropagation();

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={handleModalClick}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ContainerPrint ref={contentRef} color={fruit?.color}>
          <ContentPrint>
            <ContentFruit>
              <Title>O QUE ACONTECERIA SE?!</Title>
              <FruitImage src={fruit?.image} alt={fruit?.name} />
            </ContentFruit>
            <ContentText>
              <Text>De acordo com o fruto do espírito:</Text>
              <Name>{fruit?.name}</Name>
              <Text>o texto a seguir deve utilizar a palavra-chave: </Text>
              <Name>{keyword?.name}</Name>
              <Text>para desenvolver uma solução a esta situação: </Text>
              <Text style={{ fontWeight: "bold" }}>"{situation?.text}"</Text>
            </ContentText>
            <TextArea
              ref={textAreaRef}
              onInput={handleInput}
              value={userText}
              onChange={(e) => setUserText(e.target.value)}
              placeholder="Escreva aqui como aplicaria o fruto..."
            />
          </ContentPrint>
        </ContainerPrint>
        <div style={{ marginTop: "20px" }}>
          <label htmlFor="format-select">Escolha o formato:</label>
          <select
            id="format-select"
            value={downloadFormat}
            onChange={(e) => setDownloadFormat(e.target.value)}
            style={{ marginLeft: "10px" }}
          >
            <option value="pdf">PDF</option>
            <option value="image">Imagem (PNG)</option>
          </select>

          <button onClick={handleDownload} style={{ marginLeft: "20px" }}>
            Baixar
          </button>
        </div>
      </ModalContainer>
    </Overlay>
  );
};
