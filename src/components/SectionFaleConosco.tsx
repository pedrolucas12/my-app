
import React from "react";

type Props = {
    title : string;
    subtitle: string;
    text1: string;
    input1:  JSX.Element;
    input2:  JSX.Element;
    input3:  JSX.Element;
    input4:  JSX.Element;
    button:  JSX.Element;
    text2: string;
    imagem:  JSX.Element;
    };

    export function SectionFaleConosco({ title, subtitle, text1, input1, input2, input3, input4, button, text2, imagem }: Props) {
        return (
            <>
             <div className="cardsConosco">
              <h1 className="titleConosco">{title}</h1>
              <h2 className="subtitleConosco">{subtitle}</h2>
              <p className="text1Conosco">{text1}</p>
              {input1}
              {input2}
              {input3}
              {input4}
              {button}
              <p className="text2Conosco">{text2}</p>
            </div>
            <div>
             <h1 className="imgConosco">{imagem}</h1>
            </div>
            </>
           
        );
    }