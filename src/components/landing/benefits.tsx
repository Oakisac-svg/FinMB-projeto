import { Banknote, CalendarCheck, CheckCircle2, Goal, Salad, Sparkles } from "lucide-react";
import { Reveal } from "@/components/landing/landing-motion";
import { SectionHeading } from "@/components/landing/section-heading";

const benefits = [
  ["Economize dinheiro", "O FinMB mostra onde seu dinheiro escapa e transforma padroes em decisao.", Banknote],
  ["Melhore habitos", "O FinMB acompanha consistencia sem transformar sua rotina em pressao.", CheckCircle2],
  ["Planeje refeicoes", "Com o FinMB, calorias, macros e horarios entram no contexto do seu dia.", Salad],
  ["Organize tarefas", "O FinMB ajuda voce a priorizar o que importa e entender o impacto no progresso.", CalendarCheck],
  ["Acompanhe metas", "Com o FinMB, metas financeiras e pessoais deixam de ficar soltas.", Goal],
  ["Tudo em um lugar", "O FinMB reduz planilhas, abas e dispersao para dar mais clareza.", Sparkles],
] as const;

export function Benefits() {
  return (
    <section className="landing-section px-5 py-28 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <SectionHeading
          center
          eyebrow="Beneficios"
          title="Menos dispersao. Mais direcao."
          text="O FinMB foi desenhado para quem quer organizar a vida com elegancia, contexto e clareza sofisticada."
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([title, text, Icon], index) => (
            <Reveal key={title} delay={index * 0.04}>
              <article className="premium-card h-full rounded-[26px] border border-white/10 bg-white/[.035] p-6">
                <Icon className="size-6 text-gold-300" />
                <h3 className="mt-7 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
