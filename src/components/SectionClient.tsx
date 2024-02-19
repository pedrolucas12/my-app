import Image from "next/image";

export function SectionClient() {
    return (
        <div className="clients">
        <div className="container">
            <div className="clientRow">
                <div className="clientText">
                    <h1>
                        Clientes que confiam na nossa missão de tornar a </h1><p className='TextDestact2'> internet mais acessível </p>
                    
                </div>
            <div className="clientLogos">
                {/* Carrossel de logos dos clientes */}
            </div>
            </div>
        </div>
        </div>
    );
    }