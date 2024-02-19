import { SectionCompromisso } from "./SectionCompromisso";

import Libras from "../assets/libras.png";
import Image from "next/image";
import Leitura from "../assets/leitura.png";
import Voz from "../assets/voz.png";
import Avatar from "../assets/avatar.png";
import Instalacao from "../assets/instalacao.png";


export function Compromissos() {
	return (
        <>
        <div className="gridCompromissos">
            <SectionCompromisso 
                logo={<Image src={Libras} alt="Logo" />} // Passando a imagem da logo como um elemento JSX
                subtitle = "Libras"
                text = "Tradução de textos do português para LIBRAS"
            />
            <SectionCompromisso 
                logo={<Image src={Leitura} alt="Logo" />} // Passando a imagem da logo como um elemento JSX
                subtitle = "Recursos de Leitura"
                text = "Ajuda na compreensão de textos para pessoas com dificuldades de leitura"
            />
            <SectionCompromisso 
                logo={<Image src={Voz} alt="Logo" />} // Passando a imagem da logo como um elemento JSX
                subtitle = "Voz"
                text = "Conversão de textos do português em voz"
            />
            <SectionCompromisso 
                logo={<Image src={Avatar} alt="Logo" />} // Passando a imagem da logo como um elemento JSX
                subtitle = "Avatar Exclusivo"
                text = "Sua empresa com sua própia identidade"
            />
            <SectionCompromisso 
                logo={<Image src={Instalacao} alt="Logo" />} // Passando a imagem da logo como um elemento JSX
                subtitle = "Instalação Simples"
                text = "Instalação fácil, rápida e prática"
            />
        </div>
        </>
		
	);
}
