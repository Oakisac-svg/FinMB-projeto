import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/landing-motion";

export function CTA() {
  return (
    <section className="px-5 py-28 lg:px-8">
      <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-gold-400/25 bg-gold-400 p-10 text-center text-black shadow-[0_34px_100px_rgba(212,175,55,.2)] sm:p-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] opacity-60">FinMB</p>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Comece hoje com o FinMB.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 opacity-70">
          O FinMB transforma dados pessoais em clareza, foco e evolucao real.
        </p>
        <Button asChild size="lg" className="premium-cta mt-9 h-12 rounded-full bg-black px-8 text-white hover:bg-zinc-900">
          <Link href="/auth/signup">
            Comecar gratis <ArrowRight className="premium-arrow ml-2 size-4" />
          </Link>
        </Button>
      </Reveal>
    </section>
  );
}
