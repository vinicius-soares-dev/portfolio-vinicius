import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Layout,
  Code,
  TrendingUp,
  Palette,
  PenTool,
  Gauge,
  CheckCircle,
  ClipboardList,
  LayoutDashboard,
  Code2,
  Rocket,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import FinalCTA from "../components/sections/FinalCTA";

/* ===========================
   ANIMAÇÕES BASE (Tipadas Corretamente)
=========================== */

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

/* ===========================
   SERVIÇOS
=========================== */

const services = [
  {
    icon: Layout,
    title: "Sites Profissionais",
    desc: "Plataformas web rápidas, estruturadas com SEO técnico avançado e desenhadas especificamente para conversão.",
    msgText:
      "Olá%2C%20Vinicius%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20criação%20de%20um%20Site%20Profissional.",
    items: [
      "Design exclusivo e autoral",
      "SEO técnico estrutural",
      "Core Web Vitals otimizados",
    ],
  },
  {
    icon: Code,
    title: "Sistemas Web & SaaS",
    desc: "Arquiteturas sob medida, painéis administrativos e automações robustas para escalar operações complexas.",
    msgText:
      "Olá%2C%20Vinicius%21%20Preciso%20de%20um%20Sistema%20Web%20ou%20SaaS%20sob%20medida%20para%20minha%20empresa.",
    items: [
      "Painel administrativo intuitivo",
      "Arquitetura altamente escalável",
      "Segurança de dados avançada",
    ],
  },
  {
    icon: TrendingUp,
    title: "Tráfego Pago & Performance",
    desc: "Campanhas cirúrgicas em Google Ads e Meta Ads focadas estritamente em aquisição de clientes qualificados.",
    msgText:
      "Olá%2C%20Vinicius%21%20Quero%20escalar%20minhas%20vendas%20através%20de%20Tráfego%20Pago.",
    items: [
      "Google Ads e Meta Ads",
      "Gestão de funis de conversão",
      "Otimização diária de ROAS",
    ],
  },
  {
    icon: PenTool,
    title: "Copywriting Estratégico",
    desc: "Textos persuasivos ancorados em gatilhos mentais e na jornada do consumidor para acelerar a tomada de decisão.",
    msgText:
      "Olá%2C%20Vinicius%21%20Quero%20melhorar%20a%20copywriting%20e%20os%20textos%20do%20meu%20projeto.",
    items: [
      "Copy para landing pages",
      "Estruturação de funis",
      "CTAs de alta conversão",
    ],
  },
  {
    icon: Palette,
    title: "Design UI/UX",
    desc: "Interfaces limpas, visuais imersivos e experiências intuitivas que posicionam sua marca no topo do mercado.",
    msgText:
      "Olá%2C%20Vinicius%21%20Tenho%20interesse%20em%20um%20projeto%20de%20UI/UX%20Design.",
    items: [
      "Interface visual premium",
      "Pesquisa e experiência de uso",
      "Branding digital integrado",
    ],
  },
  {
    icon: Gauge,
    title: "SEO & Otimização",
    desc: "Aceleração extrema de carregamento e posicionamento orgânico de longo prazo nos buscadores.",
    msgText:
      "Olá%2C%20Vinicius%21%20Gostaria%20de%20otimizar%20o%20SEO%20e%20a%20performance%20do%20meu%20site.",
    items: [
      "Auditoria técnica completa",
      "SEO on-page avançado",
      "Monitoramento de métricas",
    ],
  },
];

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Diagnóstico & Estratégia",
    desc: "Mergulhamos no seu modelo de negócio, concorrência e público-alvo antes de escrever qualquer linha de código.",
  },
  {
    number: "02",
    icon: LayoutDashboard,
    title: "Planejamento & UX/UI",
    desc: "Desenhamos a arquitetura da informação, protótipos de alta fidelidade e copies direcionadas à conversão.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Desenvolvimento & Testes",
    desc: "Implementação utilizando tecnologias modernas, garantindo velocidade extrema, segurança e responsividade.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lançamento & Escala",
    desc: "Publicação monitorada, ativação de táticas de tráfego/SEO e acompanhamento contínuo dos resultados.",
  },
];

export default function Services() {
  return (
    <main className="bg-background overflow-hidden">
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/85 border border-border mb-6 backdrop-blur-md">
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-textSecondary">
                Ecossistema de Alta Performance
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-textPrimary tracking-tight leading-[1.1] mb-6">
              Soluções completas para{" "}
              <span className="text-primary">crescer no digital.</span>
            </h1>

            <p className="text-textSecondary text-lg sm:text-xl font-light leading-relaxed">
              Mais do que serviços isolados, construímos engrenagens
              coordenadas. Cada etapa de engenharia, design e marketing trabalha
              unida para gerar resultados reais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          GRID DE SERVIÇOS
      ========================================= */}
      <section className="py-16 sm:py-24 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:gap-8 lg:grid-cols-3"
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={i}
                  variants={item}
                  className="group relative rounded-[2.5rem] border border-border/60 bg-surface/40 p-8 sm:p-10 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:bg-surface/80 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div>
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-surface border border-border/80 text-primary shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/10">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-2xl font-bold text-textPrimary mb-3 tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-textSecondary text-sm sm:text-base font-light leading-relaxed mb-8">
                      {service.desc}
                    </p>

                    <ul className="space-y-3 mb-10 pt-6 border-t border-border/40 text-sm text-textSecondary font-light">
                      {service.items.map((it, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle
                            size={16}
                            className="text-primary shrink-0"
                          />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <a
                      href={`https://wa.me/5532998175601?text=${service.msgText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-bold text-sm text-textPrimary transition-all duration-300 group-hover:text-primary group-hover:gap-3"
                    >
                      <span>Solicitar orçamento</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          ETAPAS / PROCESSO
      ========================================= */}
      <section className="py-24 sm:py-32 bg-surface/30 border-t border-border/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mx-auto mb-16 sm:mb-20 max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-textPrimary tracking-tight mb-4">
              Como seu projeto evolui do zero ao lançamento
            </h2>
            <p className="text-textSecondary text-base sm:text-lg font-light">
              Processo estruturado com total transparência em cada fase de
              desenvolvimento.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative rounded-[2rem] border border-border/50 bg-surface/60 p-8 backdrop-blur-xl flex flex-col justify-between group hover:border-primary/30 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <span className="text-3xl font-black text-white/10 group-hover:text-primary/20 transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-textPrimary mb-3 tracking-tight">
                      {step.title}
                    </h3>

                    <p className="text-textSecondary text-sm font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          ÁREA EXCLUSIVA DO CLIENTE
      ========================================= */}
      <section className="py-24 sm:py-32 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-16 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <ShieldCheck size={14} className="text-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Transparência Absoluta
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-textPrimary tracking-tight mb-6">
              Área exclusiva para acompanhar seu projeto em tempo real.
            </h2>

            <p className="text-textSecondary text-base sm:text-lg font-light leading-relaxed mb-8">
              Nada de ficar sem saber o status do desenvolvimento. Você tem
              acesso a um painel privativo para monitorar cada entrega, marcos
              concluídos e comunicação direta.
            </p>

            <ul className="space-y-4 text-textSecondary font-light">
              {[
                "Status de desenvolvimento atualizado diariamente",
                "Marcos e entregas parciais validadas em tempo real",
                "Canal de comunicação centralizado e sem ruídos",
                "Histórico completo de versões e documentações",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-center">
                  <CheckCircle size={18} className="text-primary shrink-0" />
                  <span className="text-textPrimary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[2.5rem] border border-border/80 bg-surface/80 shadow-2xl overflow-hidden backdrop-blur-2xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-5 border-b border-border/80 bg-background/60">
              <div>
                <p className="text-xs text-textSecondary uppercase tracking-wider font-semibold">
                  Portal VG Tech
                </p>
                <p className="font-bold text-textPrimary text-sm sm:text-base">
                  Projeto • Plataforma Digital
                </p>
              </div>

              <span className="text-xs w-fit px-3.5 py-1.5 rounded-full bg-primary/15 font-semibold text-primary border border-primary/30">
                Em desenvolvimento ativo
              </span>
            </div>

            <div className="grid md:grid-cols-[180px_1fr] min-h-[320px]">
              <aside className="border-b md:border-b-0 md:border-r border-border/80 p-4 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible text-sm bg-background/30">
                {["Visão geral", "Etapas", "Entregas", "Mensagens"].map(
                  (tab, i) => (
                    <div
                      key={i}
                      className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                        i === 0
                          ? "bg-primary/15 text-primary border border-primary/20"
                          : "text-textSecondary hover:text-textPrimary hover:bg-surface/50"
                      }`}
                    >
                      {tab}
                    </div>
                  ),
                )}
              </aside>

              <div className="p-6 space-y-6 bg-surface/20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: "Fase atual", value: "Sprint 02" },
                    { label: "Previsão", value: "12 dias" },
                    { label: "Conclusão", value: "65%" },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-border/60 bg-background/50 p-4 backdrop-blur-sm"
                    >
                      <p className="text-[11px] text-textSecondary uppercase tracking-wider mb-1">
                        {card.label}
                      </p>
                      <p className="font-bold text-textPrimary text-sm sm:text-base">
                        {card.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-textSecondary">
                    <span>Progresso global</span>
                    <span className="text-primary">65%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-border/60 overflow-hidden p-0.5">
                    <div className="h-full w-[65%] bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all" />
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  {[
                    "Arquitetura de banco de dados validada",
                    "Design UI/UX aprovado pelo cliente",
                    "Codificação frontend em andamento",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-xs sm:text-sm text-textSecondary"
                    >
                      <CheckCircle
                        size={15}
                        className="text-primary shrink-0"
                      />
                      <span className="text-textPrimary font-light">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
