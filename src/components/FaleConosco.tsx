
import Image from "next/image";
import Cadeira from "../assets/cadeira.png";
import { SectionFaleConosco } from "./SectionFaleConosco";

export function FaleConosco() {
	return (
        <>
       <div className="gridConosco">
            <SectionFaleConosco 
               title = "Fale Conosco"
               subtitle = "Ainda tem dúvidas sobre nossas soluções ou quer sugerir algo novo?"
               text1 = "Nome"	
               input1 = {<input type="text" placeholder="Nome" className="input1"/>}
               input2 = {<input type="text" placeholder="Email" className="input2"/>}
               input3 = {<input type="text" placeholder="Telefone" className="input3"/>}
               input4 = {<input type="text" placeholder="Mensagem"className="input4" />}
               button  = {<button className="button">Enviar</button>}
               text2 = "Se preferir pode mandar uma mensagem para a gente no WhatsApp! Ou um e-mail"
               imagem = {<Image src={Cadeira} alt="Cadeira" />}
            />
        </div>
        </>
		
	);
}
