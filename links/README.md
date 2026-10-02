# 🔗 Link na Bio — Casamento L & L

Página estilo **Linktree** criada para divulgar o **Álbum Compartilhado** e o **Filtro do Instagram** do casamento (e fácil de expandir com novos botões no futuro).

---

## 📁 Estrutura desta pasta (`links/`)

Esta pasta é **100% independente** (possui suas próprias cópias do monograma e da foto do casal em `links/assets/`), o que permite publicar tanto sozinha na Vercel/Netlify quanto junto com o site principal.

```text
links/
├── index.html          # Estrutura da página Link na Bio
├── style.css           # Visual elegante (mesma paleta do casamento)
├── config.js           # ⭐ ONDE VOCÊ EDITA OS LINKS, NOMES E BOTÕES
├── script.js           # Lógica de renderização, QR Code e compartilhamento
└── assets/
    ├── foto-casal.jpg  # Foto de capa do topo
    └── monograma.png   # Monograma centralizado
```

---

## ✏️ Como editar os links ou adicionar botões depois

Abra o arquivo **`links/config.js`**:

1. **Trocar os links do Álbum e do Filtro:**
   Procure o campo `url:` dentro de `album-compartilhado` e `filtro-instagram` e cole os seus links reais.
2. **Ativar botões que já deixamos prontos (Lista de Presentes, Localização, WhatsApp):**
   Basta mudar `ativo: false` para `ativo: true`.
3. **Criar um botão novo do zero:**
   Basta adicionar mais um bloco dentro de `links: [ ... ]`:
   ```javascript
   {
     id: "meu-novo-botao",
     ativo: true,
     destaque: false,
     icone: "coracao", // camera | instagram | presente | mapa | whatsapp | calendario | coracao | link
     tag: "✨ Novidade",
     titulo: "Título do Botão",
     subtitulo: "Descrição curtinha abaixo do título",
     url: "https://seu-link-aqui.com",
   }
   ```

---

## 🚀 Como publicar na Vercel ou no Netlify

Você tem **2 formas** de colocar no ar:

### Opção A: Site exclusivo só para o Link na Bio (ex: `casamentoll.vercel.app`)
1. Crie uma conta na [Vercel](https://vercel.com) ou [Netlify](https://netlify.com) e conecte sua conta do GitHub.
2. Importe o repositório **`LLcasamento`**.
3. Nas configurações de deploy:
   - Na **Vercel**: em **Root Directory**, clique em *Edit* e selecione a pasta **`links`**.
   - No **Netlify**: em **Base directory** (ou *Publish directory*), digite **`links`**.
4. Clique em **Deploy**! Pronto: o endereço principal já abrirá direto o seu Linktree.

### Opção B: Junto com o site de presentes (ex: `seusite.vercel.app/links`)
1. Importe o repositório **`LLcasamento`** normalmente sem mudar a pasta raiz.
2. O site principal ficará em `seusite.vercel.app` e o Link na Bio ficará acessível automaticamente em **`seusite.vercel.app/links`**.
