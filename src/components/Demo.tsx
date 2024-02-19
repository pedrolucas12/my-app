import React from "react";

import { SectionDemo } from "./SectionDemo";

import Image from "next/image";
import Demonstracao from "../assets/demo.png";

export function Demo() {
	return (
		<>
			<div className="gridDemo">
				<SectionDemo
					title={<button>Demonstração</button>}
					subtitle={<button>Teste Gratuito</button>}
					logo={<Image src={Demonstracao} alt="Aumento do público" />}
				/>
			</div>
		</>
	);
}
