import { PlugZap, Sparkles, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/landing/landing-motion";
import { SectionHeading } from "@/components/landing/section-heading";

const steps = [
  ["01", "Conecte", "Leve para o FinMB suas informacoes de financas, rotina e alimentacao em poucos minutos.", PlugZap],
  ["02", "Organize", "O FinMB transforma dados soltos em uma visao clara, bonita e acionavel.", Sparkles],
  ["03", "Evolua", "Com Life Score e FinBot, o FinMB melhora suas decisoes semana apos semana.", TrendingUp],
] as const;

export function HowItWorks() {
  return (
    <section id="como-funciona" className="landing-section px-5 py-28 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <SectionHeading
          center
          eyebrow="Como funciona"
          title="Tres passos para sair do caos."
          text="O FinMB comeca simples e fica mais poderoso conforme sua vida ganha contexto."
        />
        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {steps.map(([number, title, text, Icon], index) => (
            <Reveal key={number} delay={index * 0.08}>
              <article className="premium-card relative min-h-72 overflow-hidden rounded-[30px] border border-white/10 bg-white/[.045] p-7">
                <span className="absolute right-6 top-5 font-display text-7xl font-semibold text-white/[.035]">{number}</span>
                <span className="grid size-12 place-items-center rounded-2xl bg-gold-400 text-black">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-12 font-display text-3xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
