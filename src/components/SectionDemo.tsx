import React from "react";

type Props = {
	title: JSX.Element;
	subtitle: JSX.Element;
	logo: JSX.Element;
};

export function SectionDemo({ title, subtitle, logo }: Props) {
	return (
		<div className="buttonsDemo">
			<button
				className="buttonDemo"
				style={{ boxShadow: "0px 4px 6px rgba(0, 0, 255, 0.1)" }}
			>
				Demonstração
			</button>
			<button className="buttonDemo gradient">Teste Gratuito</button>
			<h1 className="imgCompromissos">{logo}</h1>
		</div>
	);
}
