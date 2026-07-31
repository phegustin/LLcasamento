# 🎯 GUIA RÁPIDO DE PERSONALIZAÇÃO

## ✅ O que já está pronto

- ✨ Site completo e funcional
- 📱 Design responsivo (celular e desktop)
- 💳 Sistema de pagamento PIX com QR Code
- 🎁 Cards de presentes com filtros
- 💬 Botão de confirmação por WhatsApp
- 🎨 Paleta de cores elegante (verde sálvia + dourado)

---

## 📝 Próximos passos (em ordem)

### 1️⃣ Editar os dados do casal

Abra o arquivo **`data/config.js`** e altere:

```javascript
casal: {
  noivo: "SEU NOME",           // ← Nome do noivo
  noiva: "NOME DA NOIVA",      // ← Nome da noiva
  monograma: "L & L",          // ← Monograma do casal
  dataCasamento: "15/03/2027", // ← Data do casamento
  mensagemBoasVindas: "...",   // ← Mensagem de boas-vindas
  historiaCasal: "...",        // ← História de vocês
}
```

### 2️⃣ Configurar o PIX

No mesmo arquivo, altere:

```javascript
pix: {
  chave: "seu@email.com",      // ← Sua chave PIX real
  titular: "SEU NOME COMPLETO", // ← Nome do titular da conta
  cidade: "SAO PAULO",         // ← Sua cidade (sem acentos, máx 15 letras)
}
```

### 3️⃣ Configurar o WhatsApp

```javascript
contato: {
  whatsapp: "5511999999999",   // ← Seu WhatsApp (55 + DDD + número)
  mensagemConfirmacao: "...",  // ← Mensagem automática
}
```

### 4️⃣ Personalizar a lista de presentes

No array `presentes`, edite cada item:

```javascript
{
  id: 1,
  titulo: "Jantar Especial",
  descricao: "Descrição do presente",
  valor: 300.00,
  imagem: "assets/gifts/jantar.jpg",  // ← Caminho da imagem
  categoria: "lua-de-mel",            // ← casa, lua-de-mel, quarto, sala
}
```

### 5️⃣ Adicionar imagens dos presentes

1. Salve suas imagens na pasta **`assets/gifts/`**
2. Use nomes simples: `jantar.jpg`, `sofa.jpg`, `cafe.jpg`, etc.
3. Recomendação: imagens 800x600px (proporção 4:3)

### 6️⃣ Ajustar as cores (quando tiver a paleta)

Abra **`css/style.css`** e edite as variáveis no início:

```css
:root {
  --cor-primaria: #6b8e6f;        /* Cor principal */
  --cor-primaria-escura: #2d3a2e; /* Cor escura */
  --cor-destaque: #c9a961;        /* Cor de destaque */
  --cor-fundo: #faf7f2;           /* Cor de fundo */
}
```

---

## 🚀 Publicar no GitHub Pages

### Passo 1: Enviar para o GitHub

```bash
git push origin arena/019fb854-l-lcasamento
```

### Passo 2: Ativar o GitHub Pages

1. Acesse: https://github.com/phegustin/L-Lcasamento/settings/pages
2. Em **Source**, selecione **Deploy from a branch**
3. Escolha **main** e **/ (root)**
4. Clique em **Save**

### Passo 3: Acessar o site

Em 2-3 minutos, seu site estará em:
```
https://phegustin.github.io/L-Lcasamento/
```

---

## 🎨 Quando enviar monograma e paleta

Quando você tiver o **monograma** e a **paleta de cores** definitivos:

1. **Monograma**: Envie a imagem e eu substituo no site
2. **Paleta**: Me diga as cores (em hexadecimal se tiver) e eu atualizo o CSS

---

## 💡 Dicas importantes

### Segurança do PIX
- Use **email** ou **chave aleatória** (mais seguro que CPF)
- A chave fica visível publicamente no site

### Controle de presentes
- Combine com sua noiva quem vai receber as mensagens do WhatsApp
- O botão "Já fiz meu presente" ajuda a evitar duplicidades

### Imagens
- Use fotos de boa qualidade (mínimo 800x600px)
- Comprima imagens grandes em https://tinypng.com
- Mantenha backup das imagens originais

---

## 🔧 Precisa de ajuda?

Se quiser:
- Adicionar mais presentes
- Mudar o layout
- Incluir galeria de fotos
- Adicionar contador regressivo
- Ou qualquer outra funcionalidade

É só pedir! 💚
