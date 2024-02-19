import Image from 'next/image';
import AccessibilityImage from '../assets/accessibility.png';
import iconPlay from '../assets/iconPlay.png';

export function SectionHero () {
  return (
    <div className="home">
      <div className="container">
        <div className="topRow">
          <div className='textDiv'>
            <div className="mainText">
              <h1>
                Sua jornada para melhorar a <p className='TextDestact'>acessibilidade digital </p>começa aqui
              </h1>
            </div>
        </div>
        <div className="subText">
          <p>
            Nós podemos te ajudar a dar a oportunidade de acesso à informação para
            pessoas com deficiência, trazendo assim mais inclusão, diversidade e
            representatividade dentro do seu negócio
          </p>
        </div>
        <div className="buttons">
          <button className='button'>
            <Image src={iconPlay} alt="Icone para iniciar video" className='iconPlay' width={30} height={30}/>
            <a href='#'>Saiba mais.</a>
          </button>
        </div>
      </div>
      <div className="imageDiv">
        <Image
          src={AccessibilityImage}
          className='rybenaImg'
          alt="Accessibility illustration"
          width={520}
          height={470}
        />
      </div>
      </div>
     
    </div>
  );
}
