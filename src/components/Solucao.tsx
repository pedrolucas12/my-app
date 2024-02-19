
import Image from "next/image";
import { SectionSolucao } from "./SectionSolucao";
import Investimentos from "../assets/investimentos.png";
import Tabela from "../assets/tabela.png";

export function Solucao() {
	return (
        <>
       <div className="gridSolucao">
            <SectionSolucao 
                title="A Rybená é a solução mais completa do mercado"
                logo={<Image src={Investimentos} alt="Logo" />} // Passando a imagem da logo como um elemento JSX
                subtitle={<Image src={Tabela} alt="Logo" />} // Passando a imagem da logo como um elemento JSX
                text="Acessibilidade está entre os 4 pilares fundamentais para termos uma boa experiência dentro de um site. Além de buscar conformidade com as leis de acessibilidade, investindo em acessibilidade digital, a empresa se posiciona como uma marca que acredita e apoia a inclusão e a diversidade"
            />
        </div>
        </>
		
	);
}
