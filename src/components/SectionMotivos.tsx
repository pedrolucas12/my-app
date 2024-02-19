
    
import React from "react";

type Props = {
    title: string,
    subtitle: string;
    };

export function SectionMotivos({ title, subtitle }: Props) {
    return (
        <div className="cardsMotivos">
          <h1 className="h1Motivos">{title}</h1>
          <h2 className="h2Motivos">{subtitle}</h2>
        </div>
      );
    }