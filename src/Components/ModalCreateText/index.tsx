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
  Title,
  TextArea,
} from "./styles";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Fruit, Keyword, Situation } from "../../consts/types";
import { Button } from "../../pages/WhatIf/components/KeywordCard/styles";

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
  const contentRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const textRef = useRef<HTMLDivElement>(null); // Ref para o conteúdo da div editável
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
            {/* Div editável para capturar todo o texto */}
            <TextArea
              ref={textRef}
              contentEditable
              onInput={(e) => {
                const target = e.target as HTMLDivElement;
                target.style.height = "auto";
                target.style.height = `${target.scrollHeight}px`;
              }}
            />
          </ContentPrint>
        </ContainerPrint>
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', marginTop: "20px",  marginBottom: "20px", gap: '20px' }}>
          <div style={{display: 'flex', alignItems: 'center'}}>
          <Text  style={{fontSize: '20px' }}>Escolha o formato:</Text>
          <select
            id="format-select"
            value={downloadFormat}
            onChange={(e) => setDownloadFormat(e.target.value)}
            style={{  height: '40px', marginLeft: '16px' }}
          >
            <option value="pdf">PDF</option>
            <option value="image">Imagem (PNG)</option>
          </select>
          </div>
          
        
        <div>
        <Button color={fruit?.color} onClick={handleDownload} >
          Baixar
          </Button>
        </div>
          
        </div>
        
      </ModalContainer>
    </Overlay>
  );
};
