import { Compromissos } from "@/components/Compromissos";
import { Demo } from "@/components/Demo";
import { FaleConosco } from "@/components/FaleConosco";
import { Motivos } from "@/components/Motivos";
import { SectionClient } from "@/components/SectionClient";
import { SectionHero }  from "@/components/SectionHero";
import { Solucao } from "@/components/Solucao";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionClient />
      <Compromissos />
      <Motivos />
      <Demo />
      <Solucao />
      <FaleConosco />
    </>
  );
}
