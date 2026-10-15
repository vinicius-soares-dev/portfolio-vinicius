import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  MessageSquare,
  Sparkles,
  Zap,
  ArrowUpRight,
  Send,
  Workflow,
  Database,
  Calendar,
  UserCheck,
  RefreshCw,
  Brain,
  Code,
  CheckCircle2,
} from "lucide-react";

// Estrutura da árvore de conversa inteligente
interface Option {
  label: string;
  userText: string;
  reasoningSteps: string[];
  aiResponse: string;
  widgetType?: "leadCard" | "calendar" | "webhook";
  nextOptions: string[];
}

const conversationTree: Record<string, Option> = {
  start_lead: {
    label: "🎯 Como a IA qualifica meus leads?",
    userText:
      "Como o agente de IA sabe se o cliente tem potencial antes de passar pro meu vendedor?",
    reasoningSteps: [
      "🧠 Processando histórico de intenção do usuário...",
      "📊 Analisando critérios: Orçamento, Cargo e Urgência...",
      "⚡ Pontuando Lead Score em tempo real...",
    ],
    aiResponse:
      "O agente analisa a linguagem natural do cliente durante a conversa. Ele faz perguntas estratégicas e atribui uma pontuação automática. Se o **Lead Score for maior que 80**, ele notifica seu vendedor no WhatsApp e grava a oportunidade no seu CRM.",
    widgetType: "leadCard",
    nextOptions: ["start_calendar", "start_webhook"],
  },
  start_calendar: {
    label: "📅 Como funciona o agendamento automático?",
    userText:
      "Como a IA consegue agendar reuniões sem sobrepor horários na minha agenda?",
    reasoningSteps: [
      "🔌 Conectando com a API do Google Calendar / Outlook...",
      "📅 Verificando slots livres na agenda da equipe...",
      "🕒 Calculando fuso horário e preparando confirmação...",
    ],
    aiResponse:
      "A IA é conectada diretamente ao seu calendário. Ela identifica os horários vagos, sugere opções para o cliente dentro do WhatsApp e realiza a reserva instantânea com envio de lembretes automáticos.",
    widgetType: "calendar",
    nextOptions: ["start_lead", "start_webhook"],
  },
  start_webhook: {
    label: "🔗 Vocês integram com meu CRM atual?",
    userText:
      "Consigo conectar essa IA com meu CRM (HubSpot, RD Station, Piperun) e ferramentas como N8N/Make?",
    reasoningSteps: [
      "🔍 Consultando Webhooks e conectores de API...",
      "⚡ Validando estrutura do JSON de dados...",
      "✅ Conexão estabelecida com sucesso!",
    ],
    aiResponse:
      "Sim! Utilizamos integrações via Webhooks e APIs personalizadas. Cada dado coletado (Nome, E-mail, Telefone, Respostas) é disparado instantaneamente para seu CRM ou sistema interno.",
    widgetType: "webhook",
    nextOptions: ["start_lead", "start_calendar"],
  },
};

export default function AiAutomationsSection() {
  const [messages, setMessages] = useState<
    Array<{
      sender: "user" | "bot";
      text: string;
      widgetType?: "leadCard" | "calendar" | "webhook";
    }>
  >([
    {
      sender: "bot",
      text: "Olá! Sou o **Agente Virtual de IA** desenvolvido pelo Vinicius. Como posso otimizar a operação comercial da sua empresa hoje?",
    },
  ]);

  const [reasoning, setReasoning] = useState<string | null>(null);
  const [isThinking, setIsThinking] = useState(false);
  const [availableOptionKeys, setAvailableOptionKeys] = useState<string[]>([
    "start_lead",
    "start_calendar",
    "start_webhook",
  ]);
  const [leadScore, setLeadScore] = useState<number>(72);
  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);

  const handleSelectOption = async (optionKey: string) => {
    const option = conversationTree[optionKey];
    if (!option || isThinking) return;

    // 1. Adiciona a mensagem do usuário
    setMessages((prev) => [...prev, { sender: "user", text: option.userText }]);
    setIsThinking(true);

    // 2. Simula os passos de Raciocínio (Thinking Tokens)
    for (const step of option.reasoningSteps) {
      setReasoning(step);
      await new Promise((resolve) => setTimeout(resolve, 600));
    }

    setReasoning(null);
    setIsThinking(false);

    // 3. Atualiza dados dinâmicos baseados na escolha
    if (optionKey === "start_lead") setLeadScore(95);

    // 4. Adiciona a resposta rica da IA
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: option.aiResponse,
        widgetType: option.widgetType,
      },
    ]);

    // 5. Atualiza as próximas opções para o usuário escolher
    setAvailableOptionKeys(option.nextOptions);
  };

  const handleReset = () => {
    setMessages([
      {
        sender: "bot",
        text: "Olá! Sou o **Agente Virtual de IA** desenvolvido pelo Vinicius. Como posso otimizar a operação comercial da sua empresa hoje?",
      },
    ]);
    setAvailableOptionKeys(["start_lead", "start_calendar", "start_webhook"]);
    setLeadScore(72);
    setAppointmentConfirmed(false);
  };

  return (
    <section className="relative w-full bg-background py-24 sm:py-32 overflow-hidden border-t border-border/30">
      {/* Glow Cyan / Esmeralda de Fundo */}
      <div className="absolute top-1/3 -right-[15%] w-[45%] h-[60%] rounded-full bg-cyan-500/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[30%] h-[40%] rounded-full bg-emerald-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* LADO ESQUERDO: Copy Persuasiva */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[48%] flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface/50 border border-border mb-8 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-textSecondary">
                Agentes de IA & Automação
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-textPrimary tracking-tight leading-[1.1] mb-6">
              Sua operação <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-300 font-serif italic font-light">
                potencializada com IA.
              </span>
            </h2>

            <p className="text-lg text-textSecondary leading-relaxed mb-10 font-light">
              Desenvolvo{" "}
              <strong className="text-textPrimary font-medium">
                Agentes Virtuais Personalizados
              </strong>{" "}
              com capacidade de raciocínio contextual. Eles atendem seus
              clientes 24/7 no WhatsApp e Web, qualificam oportunidades,
              realizam agendamentos e alimentam seu CRM automaticamente.
            </p>

            {/* Grid Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full">
              {[
                {
                  icon: MessageSquare,
                  title: "WhatsApp com IA",
                  desc: "Respostas humanas, áudio e linguagem natural",
                },
                {
                  icon: Calendar,
                  title: "Agendamento Sync",
                  desc: "Sincronizado com Google Calendar e Outlook",
                },
                {
                  icon: Workflow,
                  title: "Orquestração N8N",
                  desc: "Integração total via Webhooks e APIs REST",
                },
                {
                  icon: UserCheck,
                  title: "Lead Scoring",
                  desc: "Filtra apenas os clientes prontos para comprar",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-1.5 p-4 rounded-2xl bg-surface/30 border border-border/50 hover:bg-surface/60 hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <item.icon size={16} />
                    </div>
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

            <button className="group inline-flex items-center gap-3 bg-surface hover:bg-surface/80 border border-border hover:border-cyan-500/50 px-6 py-3.5 rounded-xl text-textPrimary font-bold transition-all shadow-sm">
              Automatizar minha empresa
              <ArrowUpRight
                size={18}
                className="text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </motion.div>

          {/* LADO DIREITO: Mockup Interativo do Agente Inteligente */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-[52%] relative"
          >
            {/* Widget Principal Glassmorphism */}
            <div className="rounded-3xl border border-white/10 bg-[#0c1017]/95 backdrop-blur-2xl shadow-2xl shadow-black/80 overflow-hidden relative z-10">
              {/* Header do Agente */}
              <div className="px-5 py-4 bg-[#111722] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-0.5">
                      <div className="w-full h-full bg-[#0c1017] rounded-lg flex items-center justify-center text-cyan-400">
                        <Bot size={20} />
                      </div>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#0c1017]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      VS Engine AI
                      <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/30 font-mono">
                        v2.4 Autonomous
                      </span>
                    </h4>
                    <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                      ● Modelo Ativo (Atendimento & Vendas)
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  title="Reiniciar chat"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                >
                  <RefreshCw size={16} />
                </button>
              </div>

              {/* Status Bar de Performance do Agente */}
              <div className="px-5 py-2 bg-cyan-950/20 border-b border-white/5 flex items-center justify-between text-[11px] font-mono text-cyan-300">
                <span className="flex items-center gap-1.5 truncate">
                  <Database size={12} className="text-cyan-400" />
                  CRM Status:{" "}
                  <strong className="text-white">
                    Conectado (Webhooks Active)
                  </strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap size={12} className="text-emerald-400" />
                  Score:{" "}
                  <strong className="text-emerald-300">{leadScore}/100</strong>
                </span>
              </div>

              {/* ÁREA DE CHAT / MENSAGENS */}
              <div className="p-5 h-[340px] overflow-y-auto space-y-4 font-sans [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <AnimatePresence initial={false}>
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`max-w-[88%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                          msg.sender === "user"
                            ? "bg-cyan-600 text-white rounded-tr-none shadow-lg shadow-cyan-900/20"
                            : "bg-[#161e2e] text-textPrimary border border-white/10 rounded-tl-none"
                        }`}
                      >
                        {msg.text.split("**").map((part, i) =>
                          i % 2 === 1 ? (
                            <strong key={i} className="text-cyan-300 font-bold">
                              {part}
                            </strong>
                          ) : (
                            part
                          ),
                        )}
                      </div>

                      {/* WIDGETS RICOS DENTRO DO CHAT */}
                      {msg.widgetType === "leadCard" && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 w-full max-w-[88%] p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-200 flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                              95
                            </div>
                            <div>
                              <div className="font-bold text-white">
                                Oportunidade Qualificada!
                              </div>
                              <div className="text-[10px] text-emerald-300/80">
                                Enviado para o WhatsApp do Vendedor
                              </div>
                            </div>
                          </div>
                          <CheckCircle2
                            size={18}
                            className="text-emerald-400"
                          />
                        </motion.div>
                      )}

                      {msg.widgetType === "calendar" && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 w-full max-w-[88%] p-3 rounded-xl bg-surface/80 border border-cyan-500/30 text-xs space-y-2"
                        >
                          <div className="flex items-center justify-between text-textSecondary font-medium text-[11px]">
                            <span className="flex items-center gap-1">
                              <Calendar size={12} className="text-cyan-400" />{" "}
                              Horários Disponíveis Amanhã:
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => setAppointmentConfirmed(true)}
                              className={`flex-1 py-1.5 px-2 rounded-lg border text-[11px] font-bold transition-all ${
                                appointmentConfirmed
                                  ? "bg-emerald-500 text-black border-emerald-400"
                                  : "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/40"
                              }`}
                            >
                              {appointmentConfirmed
                                ? "✅ Confirmado 14:00"
                                : "14:00 (Google Sync)"}
                            </button>
                            <button className="flex-1 py-1.5 px-2 rounded-lg bg-white/5 border border-white/10 text-textSecondary text-[11px]">
                              16:30
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {msg.widgetType === "webhook" && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 w-full max-w-[88%] p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-[10px] text-cyan-400 space-y-1"
                        >
                          <div className="flex items-center justify-between text-white/50 border-b border-white/10 pb-1">
                            <span className="flex items-center gap-1">
                              <Code size={12} /> POST /api/v1/crm-sync
                            </span>
                            <span className="text-emerald-400">200 OK</span>
                          </div>
                          <div>
                            &#123; "lead": "Dr. Roberto", "score": 95, "source":
                            "WhatsApp_AI" &#125;
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* INDICADOR DE RACIOCÍNIO (THINKING TOKENS) */}
                {isThinking && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-start gap-1"
                  >
                    <div className="bg-cyan-950/50 border border-cyan-500/30 rounded-xl px-3 py-2 text-[11px] font-mono text-cyan-300 flex items-center gap-2">
                      <Brain
                        size={14}
                        className="text-cyan-400 animate-pulse"
                      />
                      <span>{reasoning}</span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* OPÇÕES DE PERGUNTAS INTERATIVAS (Controle pelo Cliente) */}
              <div className="p-4 bg-[#111722] border-t border-white/10 space-y-2">
                <div className="text-[11px] font-semibold text-textSecondary uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Escolha uma pergunta para a IA responder:</span>
                  <Sparkles size={12} className="text-cyan-400" />
                </div>

                <div className="flex flex-col gap-2">
                  {availableOptionKeys.map((key) => {
                    const opt = conversationTree[key];
                    if (!opt) return null;
                    return (
                      <button
                        key={key}
                        onClick={() => handleSelectOption(key)}
                        disabled={isThinking}
                        className="w-full p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/40 text-textPrimary hover:text-cyan-300 text-xs font-medium transition-all text-left flex items-center justify-between group"
                      >
                        <span className="truncate">{opt.label}</span>
                        <Send
                          size={12}
                          className="text-cyan-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
