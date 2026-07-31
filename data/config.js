// ============================================
// CONFIGURAÇÃO DO SITE DE CASAMENTO
// ============================================
// Edite este arquivo com os dados do casal

const CONFIG = {
  // Dados do casal
  casal: {
    noivo: "Noivo",
    noiva: "Noiva",
    monograma: "N & N",
    dataCasamento: "31 de Dezembro de 2026",
    mensagemBoasVindas: "Sejam bem-vindos à nossa lista de presentes! Estamos muito felizes em compartilhar este momento especial com vocês. Cada presente é um carinho que nos ajudará a construir nosso lar juntos.",
    historiaCasal: "Nossa história começou de forma inesperada e se transformou no amor mais bonito que já conhecemos. Agora estamos prontos para dar o próximo passo e queremos vocês conosco nessa jornada!",
  },

  // Contato
  contato: {
    whatsapp: "5511999999999", // Formato: 55 + DDD + número
    mensagemConfirmacao: "Olá! Acabei de fazer meu presente para vocês. Aguardo confirmação! 😊",
  },

  // Dados do PIX
  pix: {
    chave: "email@exemplo.com", // Chave PIX (email, telefone, CPF ou chave aleatória)
    titular: "Nome do Titular", // Nome do titular da conta
    cidade: "SAO PAULO", // Cidade do titular (máximo 15 caracteres, sem acentos)
    // IMPORTANTE: Para gerar o código PIX correto, use um gerador online
    // ou peça para eu gerar com seus dados reais
  },

  // Lista de presentes
  presentes: [
    {
      id: 1,
      titulo: "Jantar Especial na Lua de Mel",
      descricao: "Um jantar romântico para celebrarmos nossa lua de mel em grande estilo",
      valor: 300.00,
      imagem: "assets/gifts/jantar.jpg",
      categoria: "lua-de-mel",
    },
    {
      id: 2,
      titulo: "Café da Manhã a Dois",
      descricao: "Para começarmos nossos dias juntos com muito amor e café fresquinho",
      valor: 150.00,
      imagem: "assets/gifts/cafe.jpg",
      categoria: "casa",
    },
    {
      id: 3,
      titulo: "Ajuda para o Sofá Novo",
      descricao: "Um sofá confortável para nossas noites de filme e conversa",
      valor: 800.00,
      imagem: "assets/gifts/sofa.jpg",
      categoria: "casa",
    },
    {
      id: 4,
      titulo: "Kit Cozinha Completa",
      descricao: "Panelas, utensílios e tudo que precisamos para cozinhar juntos",
      valor: 500.00,
      imagem: "assets/gifts/cozinha.jpg",
      categoria: "casa",
    },
    {
      id: 5,
      titulo: "Jogo de Cama King",
      descricao: "Lençóis macios e confortáveis para nossas noites de sono",
      valor: 400.00,
      imagem: "assets/gifts/cama.jpg",
      categoria: "quarto",
    },
    {
      id: 6,
      titulo: "Spa Day para o Casal",
      descricao: "Um dia relaxante de spa para começarmos a vida a dois renovados",
      valor: 600.00,
      imagem: "assets/gifts/spa.jpg",
      categoria: "lua-de-mel",
    },
    {
      id: 7,
      titulo: "Adega de Vinhos",
      descricao: "Para brindarmos todas as conquistas e momentos especiais",
      valor: 350.00,
      imagem: "assets/gifts/vinhos.jpg",
      categoria: "casa",
    },
    {
      id: 8,
      titulo: "Smart TV 55\"",
      descricao: "Para nossas maratonas de séries e filmes favoritos",
      valor: 2500.00,
      imagem: "assets/gifts/tv.jpg",
      categoria: "sala",
    },
  ],
};
