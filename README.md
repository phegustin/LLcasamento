# 💍 Lista de Presentes do Casamento

Site personalizado para lista de presentes de casamento com pagamento via PIX.  
Responsivo, bonito e fácil de publicar no **GitHub Pages**.

---

## ✨ Funcionalidades

- 🎨 Design elegante e intimista (paleta e monograma customizáveis)
- 📱 Totalmente responsivo (celular, tablet e desktop)
- 💳 Pagamento via PIX com **QR Code** e **código copia e cola**
- 🎁 Cards bonitos para cada presente com imagem, descrição e valor
- 🔍 Filtros por categoria (Casa, Lua de Mel, Quarto, Sala...)
- 💬 Botão de confirmação por WhatsApp ("Já fiz meu presente!")
- ⚡ Hospedagem gratuita no GitHub Pages

---

## 🚀 Como usar

### 1. Personalizar os dados do casal

Edite o arquivo `data/config.js`. Lá você encontrará:

```javascript
const CONFIG = {
  casal: {
    noivo: "Nome do Noivo",
    noiva: "Nome da Noiva",
    monograma: "N & N",           // Exemplo: "L & L"
    dataCasamento: "31/12/2026",
    mensagemBoasVindas: "...",
    historiaCasal: "...",
  },
  contato: {
    whatsapp: "5511999999999",    // Seu WhatsApp (com 55 + DDD)
    mensagemConfirmacao: "...",
  },
  pix: {
    chave: "seu@email.com",       // Sua chave PIX
    titular: "Nome do Titular",
    cidade: "SAO PAULO",          // Sem acentos, máximo 15 caracteres
  },
  presentes: [ ... ],             // Sua lista de presentes
};
```

### 2. Adicionar imagens dos presentes

1. Coloque as imagens na pasta `assets/gifts/`
2. No `data/config.js`, atualize o campo `imagem` de cada presente:

```javascript
{
  id: 1,
  titulo: "Jantar Especial",
  descricao: "...",
  valor: 300.00,
  imagem: "assets/gifts/jantar.jpg",  // ← caminho da imagem
  categoria: "lua-de-mel",
}
```

> 💡 Use imagens com proporção 4:3 para melhor aparência.

### 3. Personalizar cores e fontes

Edite as variáveis CSS no início do arquivo `css/style.css`:

```css
:root {
  --cor-primaria: #6b8e6f;        /* Cor principal */
  --cor-primaria-escura: #2d3a2e; /* Cor escura */
  --cor-destaque: #c9a961;        /* Dourado/destaque */
  --cor-fundo: #faf7f2;           /* Fundo principal */
  /* ... */
}
```

### 4. Adicionar o monograma

Substitua `assets/images/monograma.png` (ou crie este arquivo).  
Atualize a referência no HTML se necessário.

---

## 📦 Publicar no GitHub Pages

### Passo 1: Enviar para o GitHub

```bash
git add .
git commit -m "Site de lista de presentes"
git push origin main
```

### Passo 2: Ativar o GitHub Pages

1. Vá para o repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione **Deploy from a branch**
5. Escolha a branch **main** e a pasta **/ (root)**
6. Clique em **Save**

### Passo 3: Acessar o site

Em alguns minutos, o site estará disponível em:
```
https://seu-usuario.github.io/nome-do-repositorio/
```

### (Opcional) Domínio personalizado

Se quiser usar um domínio próprio (ex: `www.nosso-casamento.com.br`):
1. Na mesma tela de Pages, em **Custom domain**, digite o domínio
2. Configure os DNS do seu domínio apontando para o GitHub Pages
3. Ative HTTPS

---

## 📁 Estrutura do projeto

```
├── index.html            # Página principal
├── css/
│   └── style.css         # Estilos do site
├── js/
│   ├── main.js           # Interatividade
│   └── pix.js            # Gerador de código PIX
├── data/
│   └── config.js         # ⭐ Dados do casal e presentes
├── assets/
│   ├── gifts/            # Imagens dos presentes
│   └── images/           # Monograma e outras imagens
└── README.md             # Este arquivo
```

---

## 💡 Dicas

- **Segurança do PIX:** Use uma chave PIX que você se sinta confortável em compartilhar publicamente (email ou chave aleatória são mais seguros que CPF).
- **Controle de presentes:** O botão de WhatsApp facilita o controle — combine com sua noiva quem vai receber as mensagens.
- **Fotos do casal:** Você pode adicionar uma seção de galeria de fotos facilmente duplicando uma das seções existentes.
- **Backup:** Mantenha um backup das imagens em algum lugar seguro (Google Drive, Dropbox).

---

## 🔮 Próximas melhorias (opcionais)

- [ ] Integração com cartão de crédito (Mercado Pago, Asaas, PagSeguro)
- [ ] Sistema de reserva de presentes (evitar duplicidade sem depender do WhatsApp)
- [ ] Galeria de fotos do casal
- [ ] Contador regressivo para o casamento
- [ ] Mapa do local do casamento
- [ ] Formulário de RSVP

---

## 🤝 Suporte

Se tiver dúvidas ou quiser adicionar funcionalidades, é só pedir!

Feito com 💚 para celebrar o amor de vocês.
