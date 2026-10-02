// ============================================================
// CONFIGURAÇÃO DO LINK NA BIO ( ESTILO LINKTREE - CASAMENTO )
// ============================================================
// Edite este arquivo quando quiser atualizar os nomes, textos,
// links do álbum, filtro do Instagram ou adicionar novos botões!

const CONFIG_LINKS = {
  // 1. Identidade e Topo da Página
  perfil: {
    nomes: "L & L", // Ex: "Lucas & Letícia" (você pode alterar depois)
    dataCasamento: "Nosso Grande Dia • 2026", // Ex: "15 de Novembro de 2026"
    hashtag: "#CasamentoLL", // Deixe "" (vazio) se não quiser mostrar a hashtag
    mensagem:
      "Que alegria viver esse momento com vocês! Usem nosso filtro oficial nos Stories e compartilhem todas as fotos e vídeos no nosso álbum.",
    fotoCapa: "assets/foto-casal.jpg", // Foto de capa no topo
    posicaoFotoCapa: "center 28%", // Ajuste fino do enquadramento da foto de capa
    monogramaImagem: "assets/monograma.png", // Imagem do monograma (Ativo 5)
    monogramaTexto: "L & L", // Usado caso a imagem do monograma não carregue
  },

  // 2. Lista de Botões / Links
  // ------------------------------------------------------------
  // Para ADICIONAR um botão no futuro:
  // Basta mudar `ativo: false` para `ativo: true` nos exemplos abaixo,
  // ou copiar um bloco `{ ... }` e colar na lista!
  //
  // Ícones disponíveis para o campo `icone`:
  // "camera" | "instagram" | "presente" | "mapa" | "whatsapp" | "calendario" | "coracao" | "link"
  // ------------------------------------------------------------
  links: [
    {
      id: "album-compartilhado",
      ativo: true,
      destaque: true, // Deixa o botão com destaque especial
      icone: "camera",
      tag: "📸 Registros da Festa",
      titulo: "Álbum Compartilhado",
      subtitulo: "Envie e veja as fotos e vídeos do nosso casamento",
      // 👇 Cole aqui o link do seu álbum (Dots, Google Fotos, WedShoots, Drive, iCloud, etc.)
      url: "https://web.dotstheapp.com/a?group=2564726&dlBy=phekolt&code=hzEk5MxM1wKN&utm_source=guest&utm_medium=share&utm_campaign=guest_event_album",
    },
    {
      id: "filtro-instagram",
      ativo: true,
      destaque: false,
      icone: "instagram",
      tag: "✨ Efeito Exclusivo",
      titulo: "Filtro do Instagram",
      subtitulo: "Toque para abrir a câmera e usar nos seus Stories",
      // 👇 Cole aqui o link do seu filtro ou perfil do Instagram
      url: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTkyNzE1OTY0MTA3Mjcz?story_media_id=3997686307270025578_261201818&stkn=cjQ1c3VsaWV5OGwz",
    },

    // ==========================================================
    // BOTÕES EXTRAS (DESATIVADOS POR ENQUANTO)
    // Quando quiser ativar algum, basta mudar `ativo: false` para `ativo: true`!
    // ==========================================================
    {
      id: "lista-presentes",
      ativo: false,
      destaque: false,
      icone: "presente",
      tag: "🎁 Mimo aos Noivos",
      titulo: "Lista de Presentes",
      subtitulo: "Acesse nosso site e escolha um presente especial",
      url: "../index.html#presentes",
    },
    {
      id: "localizacao",
      ativo: false,
      destaque: false,
      icone: "mapa",
      tag: "📍 Como Chegar",
      titulo: "Local da Cerimônia e Festa",
      subtitulo: "Abrir rota no Google Maps / Waze",
      url: "https://maps.google.com/",
    },
    {
      id: "confirmar-presenca",
      ativo: false,
      destaque: false,
      icone: "whatsapp",
      tag: "💬 RSVP",
      titulo: "Confirmar Presença",
      subtitulo: "Fale conosco pelo WhatsApp",
      url: "https://wa.me/5511999999999",
    },
  ],

  // 3. Rodapé
  rodape: {
    texto: "Feito com amor para celebrar o nosso casamento",
    mostrarBotaoQrCode: true, // Mostra botão para exibir QR Code da página (ótimo para compartilhar na festa)
  },
};
