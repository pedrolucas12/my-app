
import React from "react";

type Props = {
    title : string;
    logo: JSX.Element;
    subtitle:  JSX.Element;
    text: string;
    };

export function SectionSolucao({ title, logo, subtitle, text }: Props) {
    return (
        <div className="cardsSolucao">
          <h1 className="titleSolucao">{title}</h1>
          <h2 className="imgSolucao">{logo}</h2>
          <h3 className="img2Solucao">{subtitle}</h3>
          <p  className="pCompromissos">{text}</p>
        </div>
      );
    }