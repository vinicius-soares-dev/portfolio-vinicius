import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Calendar,
  Star,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Stethoscope,
  Scale,
  Compass,
  HeartHandshake,
  Sparkle,
  MessageCircle,
  Clock,
  ArrowRight,
} from "lucide-react";

const niches = [
  { id: "dentist", label: "Odontologia", icon: Stethoscope },
  { id: "lawyer", label: "Advocacia", icon: Scale },
  { id: "architect", label: "Arquitetura", icon: Compass },
  { id: "psychologist", label: "Psicologia", icon: HeartHandshake },
  { id: "aesthetic", label: "Estética", icon: Sparkle },
];

export default function ProfessionalServicesSection() {
  const [activeNiche, setActiveNiche] = useState(niches[0].id);
  const [isSimulatedAction, setIsSimulatedAction] = useState(false);

  const handleActionClick = () => {
    setIsSimulatedAction(true);
    setTimeout(() => setIsSimulatedAction(false), 3000);
  };

  // --- RENDERIZADORES DE TEMPLATES ÚNICOS PARA CADA NICHO ---

  const renderDentistTemplate = () => (
    <div className="bg-[#f8fafc] min-h-full p-5 flex flex-col justify-between rounded-b-2xl font-sans text-slate-900">
      <div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-emerald-600 font-black tracking-tighter text-lg">
            <Stethoscope size={18} /> LuxDental
          </div>
          <span className="text-[9px] font-bold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
            CRO-MG 48.291
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-800">
            Seu novo sorriso com tecnologia invisível.
          </h3>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Especialistas em lentes de contato e alinhadores invisíveis.
            Transformação digital do seu sorriso em poucas semanas.
          </p>

          <div className="flex items-center gap-3 bg-white p-2.5 rounded-2xl shadow-sm border border-slate-100 mt-2">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop"
              alt="Dra"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-xs font-bold">Dra. Juliana Mendes</p>
              <div className="flex items-center gap-1 text-[10px] text-amber-500 font-bold">
                <Star size={10} className="fill-amber-500" /> 4.9 (284
                avaliações)
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleActionClick}
        className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 rounded-full text-xs transition-all shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2"
      >
        {isSimulatedAction ? (
          <>
            <CheckCircle2 size={16} /> Agendado com sucesso!
          </>
        ) : (
          <>
            <MessageCircle size={16} /> Agendar Avaliação
          </>
        )}
      </button>
    </div>
  );

  const renderLawyerTemplate = () => (
    <div className="bg-[#1c1917] min-h-full p-6 flex flex-col justify-between rounded-b-2xl font-serif text-stone-200">
      <div>
        <div className="flex justify-center items-center mb-8 border-b border-stone-800 pb-4">
          <div className="text-center">
            <div className="text-amber-600 mb-1 flex justify-center">
              <Scale size={20} />
            </div>
            <div className="font-bold tracking-widest uppercase text-[10px] text-stone-400">
              Arantes & Associados
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h3 className="text-2xl font-normal leading-snug text-white">
            Segurança jurídica de{" "}
            <span className="italic text-amber-500">alta complexidade.</span>
          </h3>
          <p className="text-[11px] font-sans text-stone-400 uppercase tracking-widest border-y border-stone-800 py-2 inline-block">
            Direito Empresarial & Tributário
          </p>

          <div className="grid grid-cols-2 gap-2 mt-4 font-sans text-left">
            <div className="p-3 border border-stone-800 bg-stone-900/50">
              <ShieldCheck size={14} className="text-amber-600 mb-2" />
              <div className="text-[10px] font-bold text-stone-300">
                Blindagem
              </div>
            </div>
            <div className="p-3 border border-stone-800 bg-stone-900/50">
              <Award size={14} className="text-amber-600 mb-2" />
              <div className="text-[10px] font-bold text-stone-300">
                Compliance
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleActionClick}
        className="w-full mt-6 bg-amber-700 hover:bg-amber-600 text-white font-sans font-bold py-3 text-xs transition-all flex items-center justify-center gap-2"
      >
        {isSimulatedAction ? "Solicitação Enviada" : "Consultoria Estratégica"}{" "}
        <ArrowRight size={14} />
      </button>
    </div>
  );

  const renderArchitectTemplate = () => (
    <div className="bg-[#09090b] min-h-full flex flex-col justify-between rounded-b-2xl font-sans text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop"
          alt="Architecture"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />
      </div>

      <div className="relative z-10 p-5 flex flex-col h-full justify-between">
        <div className="flex justify-between items-center">
          <div className="font-bold tracking-widest text-xs">
            VALENTE<span className="font-light">.ARQ</span>
          </div>
          <div className="w-6 h-px bg-white" />
        </div>

        <div className="mt-auto pb-4">
          <div className="text-[9px] font-mono text-violet-400 mb-2 tracking-widest uppercase">
            Projeto Residencial
          </div>
          <h3 className="text-3xl font-black leading-none mb-3">
            Design que <br /> respira.
          </h3>
          <p className="text-xs text-zinc-400 font-light max-w-[85%]">
            Arquitetura minimalista integrando luz natural, materiais nobres e a
            sua essência.
          </p>

          <button
            onClick={handleActionClick}
            className="mt-6 border-b border-white pb-1 text-xs font-bold flex items-center gap-2 hover:text-violet-400 hover:border-violet-400 transition-colors"
          >
            {isSimulatedAction ? "Iniciando Projeto..." : "Ver Portfólio"}{" "}
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );

  const renderPsychologistTemplate = () => (
    <div className="bg-gradient-to-b from-sky-50 to-white min-h-full p-6 flex flex-col items-center text-center rounded-b-2xl font-sans text-slate-800">
      <div className="w-16 h-16 rounded-full p-1 bg-white shadow-xl shadow-sky-100 mb-4 mt-2">
        <img
          src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop"
          alt="Psicologo"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <h2 className="text-sm font-bold text-sky-900 mb-1">
        Psic. Gabriel Costa
      </h2>
      <p className="text-[10px] text-slate-400 font-medium mb-6">
        CRP 04/59.120 • Terapia Cognitivo-Comportamental
      </p>

      <h3 className="text-xl font-medium text-slate-700 leading-snug mb-4">
        "O primeiro passo para a mudança é o acolhimento."
      </h3>

      <div className="bg-white border border-slate-100 rounded-2xl p-4 w-full text-left shadow-sm mb-auto">
        <div className="flex items-center gap-2 mb-2 text-sky-600">
          <Clock size={14} />{" "}
          <span className="text-[11px] font-bold">Atendimento Flexível</span>
        </div>
        <p className="text-[10px] text-slate-500">
          Sessões online ou presenciais em ambiente seguro e sigiloso.
        </p>
      </div>

      <button
        onClick={handleActionClick}
        className="w-full mt-6 bg-sky-100 hover:bg-sky-200 text-sky-800 font-bold py-3.5 rounded-2xl text-xs transition-all flex items-center justify-center gap-2"
      >
        {isSimulatedAction ? (
          <>
            <CheckCircle2 size={16} /> Horário Solicitado
          </>
        ) : (
          <>
            <Calendar size={16} /> Agendar 1ª Sessão
          </>
        )}
      </button>
    </div>
  );

  const renderAestheticTemplate = () => (
    <div className="bg-[#181115] min-h-full p-6 flex flex-col justify-between rounded-b-2xl font-serif text-rose-50">
      <div>
        <div className="flex justify-between items-center mb-8 border-b border-rose-900/50 pb-4">
          <div className="font-light tracking-widest text-xs uppercase">
            Fontes <span className="italic text-rose-300">Clinic</span>
          </div>
          <Sparkle size={14} className="text-rose-400" />
        </div>

        <div className="relative mb-6">
          <div className="absolute -inset-1 rounded-full bg-rose-500/20 blur-xl" />
          <img
            src="https://images.unsplash.com/photo-1594824813571-28a77885097a?q=80&w=400&auto=format&fit=crop"
            alt="Estetica"
            className="w-full h-32 object-cover rounded-xl border border-rose-900/50 relative z-10 opacity-90"
          />
        </div>

        <h3 className="text-2xl font-normal leading-tight mb-2">
          Sua beleza, <br />
          <span className="italic text-rose-300">elevada.</span>
        </h3>
        <p className="text-[11px] font-sans text-rose-200/60 font-light leading-relaxed">
          Protocolos exclusivos de harmonização facial e bioestimuladores de
          colágeno. Resultados naturais e elegantes.
        </p>
      </div>

      <button
        onClick={handleActionClick}
        className="w-full mt-4 border border-rose-400/50 hover:bg-rose-900/40 text-rose-200 font-sans font-medium py-3 rounded-lg text-xs transition-all tracking-wider uppercase"
      >
        {isSimulatedAction ? "Reserva VIP Confirmada" : "Agendar Avaliação"}
      </button>
    </div>
  );

  return (
    <section className="relative w-full bg-background py-24 sm:py-32 overflow-hidden border-t border-border/30">
      {/* Background Glow */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -left-[10%] w-[50%] h-[60%] rounded-full bg-primary/10 blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* LADO ESQUERDO: Mockup Interativo e Seletor Novo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[50%] relative flex flex-col items-center sm:items-start"
          >
            {/* SELETOR DE NICHOS (Estilo Pill Moderno / Sem Scroll Feio) */}
            <div className="w-full max-w-[340px] mb-6">
              <div className="bg-surface/50 backdrop-blur-md p-1.5 rounded-2xl border border-border/50 flex gap-1 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x">
                {niches.map((niche) => {
                  const Icon = niche.icon;
                  const isActive = activeNiche === niche.id;
                  return (
                    <button
                      key={niche.id}
                      onClick={() => {
                        setActiveNiche(niche.id);
                        setIsSimulatedAction(false);
                      }}
                      className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[11px] font-bold transition-all snap-center whitespace-nowrap ${
                        isActive
                          ? "bg-white/10 text-white shadow-sm"
                          : "text-textSecondary hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon
                        size={14}
                        className={isActive ? "text-primary" : "opacity-60"}
                      />
                      {niche.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CONTAINER DO MOCKUP MOBILE */}
            <div className="relative w-full max-w-[340px] perspective-1000">
              <motion.div
                whileHover={{ rotateY: 2, rotateX: 2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative h-[560px] rounded-[2.5rem] border-[8px] border-[#181820] bg-black overflow-hidden shadow-2xl shadow-black/80"
              >
                {/* Header do Navegador Mobile Simulada */}
                <div className="absolute top-0 left-0 right-0 h-14 bg-[#181820]/90 backdrop-blur-md z-50 flex flex-col justify-end pb-2 px-4 border-b border-white/5">
                  <div className="w-1/3 h-5 bg-black absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl" />{" "}
                  {/* Notch */}
                  <div className="bg-black/50 text-white/40 text-[10px] text-center py-1.5 rounded-md font-mono truncate px-4">
                    https://{activeNiche}-demo.com
                  </div>
                </div>

                {/* AREA DA LANDING PAGE COM TRANSIÇÃO */}
                <div className="absolute inset-0 top-14">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeNiche}
                      initial={{ opacity: 0, filter: "blur(4px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(4px)" }}
                      transition={{ duration: 0.3 }}
                      className="h-full w-full"
                    >
                      {activeNiche === "dentist" && renderDentistTemplate()}
                      {activeNiche === "lawyer" && renderLawyerTemplate()}
                      {activeNiche === "architect" && renderArchitectTemplate()}
                      {activeNiche === "psychologist" &&
                        renderPsychologistTemplate()}
                      {activeNiche === "aesthetic" && renderAestheticTemplate()}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Elemento de Performance Flutuante */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -right-4 z-20 flex items-center gap-3 p-3.5 rounded-2xl border border-white/10 bg-surface/90 backdrop-blur-xl shadow-2xl"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                  <Award size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-textSecondary font-bold uppercase tracking-wider">
                    Autoridade
                  </div>
                  <div className="text-xs font-black text-white">
                    +85% Consultas
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* LADO DIREITO: Copy Persuasiva (Mantida Elegante) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-[50%] flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface/50 border border-border mb-8 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-textSecondary">
                Profissionais Liberais
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-textPrimary tracking-tight leading-[1.1] mb-6">
              Sua agenda lotada com <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 font-serif italic font-light">
                clientes de alto valor.
              </span>
            </h2>

            <p className="text-lg text-textSecondary leading-relaxed mb-10 font-light">
              Pacientes e clientes exigentes não agendam consultas em sites
              genéricos. Desenvolvo Landing Pages de{" "}
              <strong className="text-textPrimary font-medium">
                design exclusivo para cada especialidade
              </strong>
              , transmitindo prestígio imediato e transformando cliques em
              consultas marcadas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full">
              {[
                {
                  icon: Award,
                  title: "Autoridade e Prestígio",
                  desc: "Identidade visual exclusiva para seu nome",
                },
                {
                  icon: Calendar,
                  title: "Foco em Conversão",
                  desc: "Botões de agendamento sempre visíveis",
                },
                {
                  icon: Star,
                  title: "Prova Social",
                  desc: "Design focado em avaliações e resultados",
                },
                {
                  icon: ShieldCheck,
                  title: "Design Customizado",
                  desc: "Fuja de templates prontos e robóticos",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-1.5 p-4 rounded-2xl bg-surface/30 border border-border/50 hover:bg-surface/60 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <item.icon size={16} className="text-primary" />
                    <strong className="text-textPrimary text-sm">
                      {item.title}
                    </strong>
                  </div>
                  <span className="text-xs text-textSecondary leading-relaxed">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>

            <button className="group inline-flex items-center gap-3 bg-surface hover:bg-surface/80 border border-border hover:border-primary/50 px-6 py-3.5 rounded-xl text-textPrimary font-bold transition-all shadow-sm">
              Criar site para meu segmento
              <ArrowUpRight
                size={18}
                className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
