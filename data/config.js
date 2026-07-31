// ============================================
// CONFIGURAÇÃO DO SITE DE CASAMENTO
// ============================================

const CONFIG = {
  casal: {
    noivo: "Luís Felipe",
    noiva: "Letícia",
    monograma: "L & L",
    dataCasamento: "03 de outubro de 2026",
    mensagemBoasVindas: "Sejam bem-vindos à nossa lista de presentes! Estamos muito felizes em compartilhar este momento especial com vocês. Cada presente é um carinho que nos ajudará a construir nosso lar juntos.",
    historiaCasal: "Nossa história começou de forma inesperada e se transformou no amor mais bonito que já conhecemos. Agora estamos prontos para dar o próximo passo e queremos vocês conosco nessa jornada!",
  },

  contato: {
    whatsapp: "5511999999999", // Formato: 55 + DDD + número
    mensagemConfirmacao: "Olá! Acabei de fazer meu presente para vocês. Aguardo confirmação! 😊",
  },

  // RSVP: ao criar o formulário no Formspree, preencha o endpoint e altere ativa para true.
  rsvp: {
    ativa: true,
    endpoint: "https://formspree.io/f/mdaqrnzk",
    mensagemSucesso: "Presença registrada! Estamos muito felizes por celebrar esse dia com você.",
  },

  evento: {
    celebracao: {
      horario: "10:00h",
      local: "Paróquia São Francisco de Assis",
      endereco: "Av. Plácido de Castro, nº 584 — Caranazal",
      mapa: "https://www.google.com/maps/search/?api=1&query=Par%C3%B3quia+S%C3%A3o+Francisco+de+Assis%2C+Av.+Pl%C3%A1cido+de+Castro%2C+584%2C+Caranazal%2C+Santar%C3%A9m+-+PA",
    },
    recepcao: {
      horario: "12:00h",
      local: "Hotel London",
      endereco: "Rua Lameira Bittencourt, nº 41 — Centro",
      mapa: "https://www.google.com/maps/search/?api=1&query=Hotel+London%2C+Rua+Lameira+Bittencourt%2C+41%2C+Centro%2C+Santar%C3%A9m+-+PA",
    },
  },

  pix: {
    chave: "email@exemplo.com",
    titular: "Nome do Titular",
    cidade: "SAO PAULO",
  },

  // Valores e textos podem ser ajustados livremente antes do casamento.
  presentes: [
    {
      id: 1,
      titulo: "Jantar à Luz de Velas",
      descricao: "Um brinde a nós dois, com mesa bonita, conversa demorada e muito amor.",
      valor: 320.00,
      imagem: "assets/gifts/jantar-romantico.jpg",
      categoria: "lua-de-mel",
    },
    {
      id: 2,
      titulo: "Café da Manhã sem Pressa",
      descricao: "Para começarmos um domingo qualquer como se fosse uma pequena celebração.",
      valor: 150.00,
      imagem: "assets/gifts/cafe-na-cama.jpg",
      categoria: "casa",
    },
    {
      id: 3,
      titulo: "Nosso Sofá de Domingo",
      descricao: "Uma ajuda para o nosso cantinho de preguiça, conversa e cochilos juntos.",
      valor: 600.00,
      imagem: "assets/gifts/sofa-domingo.jpg",
      categoria: "sala",
    },
    {
      id: 4,
      titulo: "Kit para Cozinhar Juntos",
      descricao: "Panelas, utensílios e coragem para testar receitas sem pedir delivery.",
      valor: 280.00,
      imagem: "assets/gifts/cozinhar-juntos.jpg",
      categoria: "cozinha",
    },
    {
      id: 5,
      titulo: "Lençóis para Domingos Lentos",
      descricao: "Para deixar nossas noites e manhãs ainda mais macias e aconchegantes.",
      valor: 250.00,
      imagem: "assets/gifts/roupa-de-cama.jpg",
      categoria: "quarto",
    },
    {
      id: 6,
      titulo: "Brinde aos Próximos Capítulos",
      descricao: "Taças e bons vinhos para celebrar cada conquista da vida a dois.",
      valor: 180.00,
      imagem: "assets/gifts/brinde.jpg",
      categoria: "casa",
    },
    {
      id: 7,
      titulo: "Noite de Pizza e Vinho",
      descricao: "Porque o amor também se mede em fatias divididas no sofá.",
      valor: 120.00,
      imagem: "assets/gifts/noite-de-pizza.jpg",
      categoria: "sala",
    },
    {
      id: 8,
      titulo: "A Primeira Plantinha da Nossa Selva",
      descricao: "Para dar vida ao nosso lar — prometemos lembrar de regar.",
      valor: 90.00,
      imagem: "assets/gifts/plantinhas.jpg",
      categoria: "casa",
    },
    {
      id: 9,
      titulo: "Malas para a Lua de Mel",
      descricao: "Uma ajudinha para colecionarmos paisagens, descanso e memórias inesquecíveis.",
      valor: 500.00,
      imagem: "assets/gifts/lua-de-mel.jpg",
      categoria: "lua-de-mel",
    },
    {
      id: 10,
      titulo: "Uma Noite Especial na Lua de Mel",
      descricao: "Para uma experiência a dois que vai ficar guardada para sempre.",
      valor: 650.00,
      imagem: "assets/gifts/noite-especial-lua-de-mel.jpg",
      categoria: "lua-de-mel",
    },
    {
      id: 11,
      titulo: "Sessão Pipoca + Disputa pelo Controle",
      descricao: "Para nossas maratonas — a escolha do filme segue em negociação.",
      valor: 110.00,
      imagem: "assets/gifts/noite-de-filme.jpg",
      categoria: "sala",
    },
    {
      id: 12,
      titulo: "Nosso Cantinho de Leitura",
      descricao: "Uma ajuda para deixar a sala ainda mais gostosa para ler e sonhar.",
      valor: 220.00,
      imagem: "assets/gifts/cantinho-de-leitura.jpg",
      categoria: "sala",
    },
    {
      id: 13,
      titulo: "Toalhas Fofinhas para o Nosso Banho",
      descricao: "Pequenos confortos que fazem toda a diferença na rotina.",
      valor: 200.00,
      imagem: "assets/gifts/toalhas.jpg",
      categoria: "quarto",
    },
    {
      id: 14,
      titulo: "Café para Receber Visitas",
      descricao: "Para que sempre tenha café passado e conversa boa na nossa casa.",
      valor: 130.00,
      imagem: "assets/gifts/cafe-visitas.jpg",
      categoria: "casa",
    },
    {
      id: 15,
      titulo: "Fundo do “Não Deixa a Louça Acumular”",
      descricao: "Uma contribuição bem-humorada para a nossa paz doméstica e uma cozinha organizada.",
      valor: 75.00,
      imagem: "assets/gifts/louca.jpg",
      categoria: "cozinha",
    },
  ],
};
