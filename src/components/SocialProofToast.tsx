import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Calendar,
  TrendingUp,
  Code2,
  ShoppingCart,
  Cpu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

export default function SocialProofToast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissedPermanently, _setIsDismissedPermanently] = useState(false);

  // Gera datas dinâmicas a partir de hoje
  const getDynamicDate = (daysAhead: number) => {
    const date = new Date();
    date.setDate(date.getDate() + daysAhead);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
    });
  };

  const notifications = [
    // --- LOTE 1: Landing Pages & Sites Institucionais ---
    {
      icon: TrendingUp,
      title: "Novo projeto fechado!",
      desc: "Landing Page de alta conversão contratada recentemente.",
      time: "Há poucos minutos",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: CheckCircle2,
      title: "Cliente entrou em contato",
      desc: "Solicitou orçamento para site institucional de arquitetura.",
      time: "Há 12 minutos",
      color: "text-primary bg-primary/10 border-primary/20",
    },
    {
      icon: Calendar,
      title: "Agenda de Projetos",
      desc: `Vaga preenchida para o dia ${getDynamicDate(1)}. Próxima vaga aberta.`,
      time: "Hoje",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: Code2,
      title: "Entrega realizada com sucesso",
      desc: "Site institucional entregue com otimização Core Web Vitals.",
      time: "Há 25 minutos",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Sparkles,
      title: "Novo Briefing aprovado",
      desc: "Início do design de interface UI/UX para consultoria jurídica.",
      time: "Há 40 minutos",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      icon: CheckCircle2,
      title: "Orçamento solicitado",
      desc: "Empresa de engenharia solicitou proposta para reformulação web.",
      time: "Há 1 hora",
      color: "text-primary bg-primary/10 border-primary/20",
    },
    {
      icon: TrendingUp,
      title: "Contrato assinado!",
      desc: "Desenvolvimento de site profissional para clínica médica.",
      time: "Há 2 horas",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Code2,
      title: "Otimização de SEO iniciada",
      desc: "Auditoria técnica e estrutural iniciada para cliente de São Paulo.",
      time: "Há 3 horas",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Calendar,
      title: "Reunião de Alinhamento",
      desc: `Briefing estratégico agendado para o dia ${getDynamicDate(2)}.`,
      time: "Hoje",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: Sparkles,
      title: "Redesign de marca aprovado",
      desc: "Nova identidade visual e UI implementadas com sucesso.",
      time: "Há 4 horas",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },

    // --- LOTE 2: E-commerce & Lojas Virtuais ---
    {
      icon: ShoppingCart,
      title: "E-commerce em produção",
      desc: "Loja virtual de produtos gourmet configurada e integrada.",
      time: "Há 35 minutos",
      color: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    },
    {
      icon: CheckCircle2,
      title: "Gateway de Pagamento",
      desc: "Integração de pagamentos e checkout transparente finalizada.",
      time: "Há 50 minutos",
      color: "text-primary bg-primary/10 border-primary/20",
    },
    {
      icon: ShoppingCart,
      title: "Novo projeto de Loja Virtual",
      desc: "Cliente fechou pacote completo de e-commerce personalizado.",
      time: "Há 1 hora",
      color: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    },
    {
      icon: ShieldCheck,
      title: "Migração de plataforma",
      desc: "Base de produtos migrada com segurança e sem perda de SEO.",
      time: "Há 2 horas",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: ShoppingCart,
      title: "Consultoria de Conversão",
      desc: "Análise de carrinho abandonado e melhorias de UI aplicadas.",
      time: "Há 3 horas",
      color: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    },
    {
      icon: CheckCircle2,
      title: "Catálogo automatizado",
      desc: "Importação em massa de mais de 1.000 SKUs concluída.",
      time: "Há 4 horas",
      color: "text-primary bg-primary/10 border-primary/20",
    },
    {
      icon: ShoppingCart,
      title: "Projeto BR Códigos",
      desc: "Novo lote de automação de códigos EAN/DUN integrado.",
      time: "Há 5 horas",
      color: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    },
    {
      icon: Calendar,
      title: "Agenda de E-commerce",
      desc: `Consultoria técnica agendada para ${getDynamicDate(3)}.`,
      time: "Hoje",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: ShieldCheck,
      title: "Certificado SSL & Segurança",
      desc: "Blindagem antifraude ativada em nova loja virtual.",
      time: "Há 6 horas",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: ShoppingCart,
      title: "Recorde de vendas superado",
      desc: "Cliente reportou aumento de 80% nas conversões pós-redesign.",
      time: "Ontem",
      color: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    },

    // --- LOTE 3: Sistemas Web & SaaS ---
    {
      icon: Cpu,
      title: "Novo SaaS em desenvolvimento",
      desc: "Arquitetura em React e Node.js estruturada com sucesso.",
      time: "Há 20 minutos",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      icon: Code2,
      title: "Painel Administrativo",
      desc: "Dashboard interativo e relatórios em tempo real entregues.",
      time: "Há 45 minutos",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Cpu,
      title: "Automação de Processos",
      desc: "Sistema web sob medida contratado por empresa de logística.",
      time: "Há 1 hora",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      icon: CheckCircle2,
      title: "API REST integrada",
      desc: "Conexão com sistemas externos e webhooks finalizada.",
      time: "Há 2 horas",
      color: "text-primary bg-primary/10 border-primary/20",
    },
    {
      icon: Cpu,
      title: "Deploy em Produção",
      desc: "Plataforma escalável publicada em ambiente de alta disponibilidade.",
      time: "Há 3 horas",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      icon: Code2,
      title: "Área exclusiva do cliente",
      desc: "Módulo de acompanhamento de projetos ativado para novo contratante.",
      time: "Há 4 horas",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Calendar,
      title: "Sprint de Desenvolvimento",
      desc: `Início da Sprint 02 agendado para ${getDynamicDate(1)}.`,
      time: "Hoje",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: Cpu,
      title: "Sistema Zinq atualizado",
      desc: "Novas ferramentas de agendamento e IA liberadas.",
      time: "Há 5 horas",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      icon: ShieldCheck,
      title: "Banco de dados otimizado",
      desc: "Consultas SQL e índices redis otimizados para alta performance.",
      time: "Há 6 horas",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Cpu,
      title: "Contrato de Manutenção SaaS",
      desc: "Empresa renovou contrato de suporte e evolução contínua.",
      time: "Ontem",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },

    // --- LOTE 4: Tráfego Pago & Marketing ---
    {
      icon: TrendingUp,
      title: "Campanha Google Ads ativa",
      desc: "Novos anúncios no ar com foco em geração de leads qualificados.",
      time: "Há 15 minutos",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Sparkles,
      title: "Copywriting Estratégico",
      desc: "Textos de alta conversão entregues para página de lançamento.",
      time: "Há 30 minutos",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      icon: TrendingUp,
      title: "ROAS otimizado",
      desc: "Campanha de Meta Ads atingiu retorno expressivo para cliente.",
      time: "Há 1 hora",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: CheckCircle2,
      title: "Funil de Vendas estruturado",
      desc: "Página de captura e automação de e-mail marketing configuradas.",
      time: "Há 2 horas",
      color: "text-primary bg-primary/10 border-primary/20",
    },
    {
      icon: TrendingUp,
      title: "Gestão de Tráfego contratada",
      desc: "Novo cliente fechou pacote trimestral de tráfego pago.",
      time: "Há 3 horas",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Sparkles,
      title: "Estratégia de Lançamento",
      desc: "Alinhamento de criativos e públicos-alvo concluído.",
      time: "Há 4 horas",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      icon: Calendar,
      title: "Reunião de Métricas",
      desc: `Análise de resultados quinzenal marcada para ${getDynamicDate(2)}.`,
      time: "Hoje",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: TrendingUp,
      title: "Custo por Lead reduzido",
      desc: "Otimizações de palavras-chave reduziram o CPL em 45%.",
      time: "Há 5 horas",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Sparkles,
      title: "Criativos em vídeo aprovados",
      desc: "Novos materiais visuais inseridos nas campanhas ativas.",
      time: "Há 6 horas",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      icon: TrendingUp,
      title: "Escala de orçamento",
      desc: "Campanha validada e orçamento de anúncios escalado com segurança.",
      time: "Ontem",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },

    // --- LOTE 5: Agendamentos, Vagas e Provas Sociais Gerais ---
    {
      icon: Calendar,
      title: "Agenda de Projetos",
      desc: `Última vaga da semana reservada para o dia ${getDynamicDate(4)}.`,
      time: "Há 10 minutos",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: CheckCircle2,
      title: "Novo contato via WhatsApp",
      desc: "Diretor comercial solicitou orçamento para aplicativo mobile.",
      time: "Há 25 minutos",
      color: "text-primary bg-primary/10 border-primary/20",
    },
    {
      icon: Sparkles,
      title: "Feedback 5 estrelas",
      desc: "Cliente elogiou a velocidade e o design do novo sistema entregue.",
      time: "Há 1 hora",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      icon: Calendar,
      title: "Planejamento Mensal",
      desc: `Reunião de roadmap fechada para o dia ${getDynamicDate(5)}.`,
      time: "Há 2 horas",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: Code2,
      title: "Atualização de Portfólio",
      desc: "Novo case de sucesso publicado na galeria principal.",
      time: "Há 3 horas",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: CheckCircle2,
      title: "Consultoria técnica",
      desc: "Sessão de arquitetura de software realizada com sucesso.",
      time: "Há 4 horas",
      color: "text-primary bg-primary/10 border-primary/20",
    },
    {
      icon: Calendar,
      title: "Agenda de Projetos",
      desc: `Início de novo cronograma definido para ${getDynamicDate(1)}.`,
      time: "Há 5 horas",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: TrendingUp,
      title: "Expansão de equipe",
      desc: "VG Tech Solutions alinhando novos recursos para próximos sprints.",
      time: "Há 6 horas",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: ShieldCheck,
      title: "Homologação concluída",
      desc: "Testes finais de segurança aprovados pelo cliente final.",
      time: "Ontem",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Sparkles,
      title: "Parceria estratégica fechada",
      desc: "Nova agência parceira integrada para demandas de desenvolvimento web.",
      time: "Ontem",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
  ];

  useEffect(() => {
    if (isDismissedPermanently) return;

    // Exibe o primeiro toast após 6 segundos de navegação
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 6000);

    return () => clearTimeout(initialTimer);
  }, [isDismissedPermanently]);

  useEffect(() => {
    if (!isVisible || isDismissedPermanently) return;

    // Roda a cada 18 segundos de forma suave
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 1000);
    }, 18000);

    return () => clearInterval(interval);
  }, [isVisible, isDismissedPermanently, notifications.length]);

  if (isDismissedPermanently) return null;

  const current = notifications[currentIndex];
  const Icon = current.icon;

  return (
    <div className="fixed bottom-24 right-4 sm:bottom-6 sm:left-6 z-[997] pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 100 }}
            onDragEnd={(_, info) => {
              if (info.offset.x > 50 || info.offset.x < -50) {
                setIsVisible(false); // Fecha ao deslizar para o lado
              }
            }}
            className="pointer-events-auto relative flex items-start gap-3.5 max-w-[300px] sm:max-w-[320px] rounded-2xl border border-border/80 bg-surface/95 p-4 shadow-2xl backdrop-blur-2xl cursor-grab active:cursor-grabbing touch-pan-y"
          >
            {/* Botão de Fechar Individual */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2.5 right-2.5 text-textSecondary hover:text-textPrimary transition"
              aria-label="Fechar notificação"
            >
              <X size={13} />
            </button>

            {/* Ícone com cor dinâmica */}
            <div
              className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${current.color}`}
            >
              <Icon size={18} />
            </div>

            {/* Conteúdo */}
            <div className="flex-1 min-w-0 pr-3">
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-bold text-textPrimary tracking-tight">
                  {current.title}
                </p>
                <span className="text-[10px] text-textSecondary font-light">
                  {current.time}
                </span>
              </div>
              <p className="text-xs text-textSecondary font-light leading-relaxed">
                {current.desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
