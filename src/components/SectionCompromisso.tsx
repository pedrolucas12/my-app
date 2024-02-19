
import React from "react";

type Props = {
    logo: JSX.Element;
    subtitle: string;
    text: string;
    };

export function SectionCompromisso({ logo, subtitle, text }: Props) {
    return (
        <div className="cardsCompromissos">
          <h1 className="imgCompromissos">{logo}</h1>
          <h2 className="h2Compromissos">{subtitle}</h2>
          <p  className="pCompromissos">{text}</p>
        </div>
      );
    }