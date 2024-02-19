

import { SectionCompromisso } from "./SectionCompromisso";

import { SectionMotivos } from "./SectionMotivos";


export function Motivos() {
	return (
        <>
            <h1 className="titleMotivos">Por que sua empresa precisa de acessibilidade digital?</h1>
        <div className="gridMotivos">
            <SectionMotivos 
                title="Aumento do público"
                subtitle = "Quanto mais acessível, mais pessoas visitam seu site"
            />
            <SectionMotivos 
                title="Otimização do SEO"
                subtitle = "Implementando ferramentas de acessibilidade digital seu site fica melhor ranqueado no Google"
            />
            <SectionMotivos 
                title="Maior engajamento"
                subtitle = "Empresas que se mostram atentas às questões de ESG tem retorno positivo nas redes sociais"
            />
            <SectionMotivos 
                title="Acesso à informação"
                subtitle = "Empresas que se mostram atentas às questões de ESG tem retorno positivo nas redes sociais"
            />
            <SectionMotivos 
                title="Fidelização de clientes"
                subtitle = "Navegação inclusiva demonstra preocupação e aproxima sua empresa do público"
            />
              <SectionMotivos 
                title="Lei Brasileira de Inclusão"
                subtitle = "13.146/2015 - Trata da inclusão da pessoa com deficiência; “Art. 63. É obrigatória a acessibilidade nos sítios da internet mantidos por empresas com sede ou representação comercial no País [...]”"
            />
        </div>
        </>
		
	);
}
