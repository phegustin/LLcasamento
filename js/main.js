// ============================================
// SCRIPT PRINCIPAL DO SITE
// ============================================

// Atualize este valor a cada publicação de imagens para ignorar caches antigos.
const VERSAO_ASSETS = "20260731-2";

document.addEventListener("DOMContentLoaded", () => {
  renderizarCabecalho();
  renderizarEvento();
  renderizarPresentes();
  configurarModal();
  configurarFiltros();
  configurarScrollSuave();
  configurarRSVP();
  configurarAnimações();
});

// ---- Renderização do Cabeçalho ----

function renderizarCabecalho() {
  const { casal } = CONFIG;

  const monogramaEl = document.getElementById("monograma");
  if (monogramaEl && !monogramaEl.querySelector("img")) {
    monogramaEl.textContent = casal.monograma;
  }

  const nomesEl = document.getElementById("nomes-casal");
  if (nomesEl) nomesEl.textContent = `${casal.noiva} & ${casal.noivo}`;

  const dataEl = document.getElementById("data-casamento");
  if (dataEl) dataEl.textContent = casal.dataCasamento;

  const msgEl = document.getElementById("mensagem-boas-vindas");
  if (msgEl) msgEl.textContent = casal.mensagemBoasVindas;

  document.title = `${casal.noiva} & ${casal.noivo} | Lista de Presentes`;
}

// ---- Local e horários ----

function renderizarEvento() {
  if (!CONFIG.evento) return;

  ["celebracao", "recepcao"].forEach((tipo) => {
    const evento = CONFIG.evento[tipo];
    if (!evento) return;

    const horario = document.getElementById(`${tipo}-horario`);
    const local = document.getElementById(`${tipo}-local`);
    const endereco = document.getElementById(`${tipo}-endereco`);
    const mapa = document.getElementById(`${tipo}-mapa`);

    if (horario) horario.textContent = evento.horario;
    if (local) local.textContent = evento.local;
    if (endereco) endereco.textContent = evento.endereco;
    if (mapa) mapa.href = evento.mapa;
  });
}

// ---- Renderização dos Presentes ----

function renderizarPresentes(filtro = "todos") {
  const container = document.getElementById("lista-presentes");
  if (!container) return;

  container.innerHTML = "";

  const presentes =
    filtro === "todos"
      ? CONFIG.presentes
      : CONFIG.presentes.filter((p) => p.categoria === filtro);

  presentes.forEach((presente, index) => {
    const card = document.createElement("div");
    card.className = "gift-card";
    card.style.animationDelay = `${index * 0.08}s`;
    card.innerHTML = `
      <div class="gift-image-wrapper">
        <img 
          src="${presente.imagem}?v=${VERSAO_ASSETS}"
          alt="${presente.titulo}"
          onerror="this.src='assets/images/placeholder-gift.svg'"
          loading="lazy"
        />
        <div class="gift-category-badge">${formatarCategoria(presente.categoria)}</div>
      </div>
      <div class="gift-info">
        <h3 class="gift-title">${presente.titulo}</h3>
        <p class="gift-description">${presente.descricao}</p>
        <div class="gift-footer">
          <span class="gift-price">${formatarMoeda(presente.valor)}</span>
          <button class="btn-presentear" data-id="${presente.id}" aria-label="Presentear ${presente.titulo}">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
            Presentear
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Atachar eventos aos botões
  document.querySelectorAll(".btn-presentear").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id, 10);
      const presente = CONFIG.presentes.find((p) => p.id === id);
      if (presente) abrirModalPIX(presente);
    });
  });
}

// ---- Filtros ----

function configurarFiltros() {
  const botoes = document.querySelectorAll(".filter-btn");
  botoes.forEach((btn) => {
    btn.addEventListener("click", () => {
      botoes.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderizarPresentes(btn.dataset.filter);
    });
  });
}

// ---- Modal PIX ----

function configurarModal() {
  const modal = document.getElementById("modal-pix");
  const closeBtn = document.getElementById("btn-fechar-modal");
  const overlay = document.getElementById("modal-overlay");

  if (closeBtn) closeBtn.addEventListener("click", fecharModal);
  if (overlay) overlay.addEventListener("click", fecharModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      fecharModal();
    }
  });
}

function abrirModalPIX(presente) {
  const modal = document.getElementById("modal-pix");
  if (!modal) return;

  const { pix } = CONFIG;
  const txid = `PRESENTE${presente.id}`;

  // Gerar código PIX
  const codigoPIX = gerarCodigoPIX({
    chavePIX: pix.chave,
    nomeTitular: pix.titular,
    cidade: pix.cidade,
    valor: presente.valor,
    descricao: presente.titulo,
    txid: txid,
  });

  // Preencher dados
  document.getElementById("modal-titulo").textContent = presente.titulo;
  document.getElementById("modal-valor").textContent = formatarMoeda(
    presente.valor
  );
  document.getElementById("modal-chave-pix").textContent = pix.chave;
  document.getElementById("modal-titular").textContent = pix.titular;
  document.getElementById("codigo-pix-texto").textContent = codigoPIX;

  // Configura o WhatsApp antes de recursos externos, para o botão nunca ficar sem link.
  const btnWhatsapp = document.getElementById("btn-confirmar-whatsapp");
  if (btnWhatsapp) {
    const mensagem = encodeURIComponent(
      `${CONFIG.contato.mensagemConfirmacao}\n\n🎁 Presente: ${presente.titulo}\n💰 Valor: ${formatarMoeda(presente.valor)}`
    );
    const destinoWhatsapp = `https://api.whatsapp.com/send?phone=${CONFIG.contato.whatsapp}&text=${mensagem}`;
    btnWhatsapp.href = destinoWhatsapp;
    btnWhatsapp.onclick = (event) => {
      event.preventDefault();
      window.location.assign(destinoWhatsapp);
    };
  }

  // Gerar QR Code
  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = "";
  if (typeof QRCode !== "undefined") {
    new QRCode(qrContainer, {
      text: codigoPIX,
      width: 220,
      height: 220,
      colorDark: "#2d3a2e",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M,
    });
  }

  // Botão copiar
  const btnCopiar = document.getElementById("btn-copiar-pix");
  btnCopiar.onclick = async () => {
    const sucesso = await copiarParaClipboard(codigoPIX);
    if (sucesso) {
      const textoOriginal = btnCopiar.innerHTML;
      btnCopiar.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Copiado!
      `;
      btnCopiar.classList.add("copied");
      setTimeout(() => {
        btnCopiar.innerHTML = textoOriginal;
        btnCopiar.classList.remove("copied");
      }, 2500);
    }
  };

  // Mostrar modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function fecharModal() {
  const modal = document.getElementById("modal-pix");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ---- Confirmação de presença (Formspree) ----

function configurarRSVP() {
  const { rsvp } = CONFIG;
  const section = document.getElementById("rsvp");
  const nav = document.getElementById("nav-rsvp");
  const form = document.getElementById("rsvp-form");
  const status = document.getElementById("rsvp-status");

  if (!rsvp || !rsvp.ativa || !rsvp.endpoint || !section || !form) return;

  section.hidden = false;
  if (nav) nav.hidden = false;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const button = form.querySelector("button[type='submit']");
    button.disabled = true;
    button.textContent = "Enviando confirmação...";
    status.className = "rsvp-status";
    status.textContent = "";

    try {
      const resposta = await fetch(rsvp.endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!resposta.ok) throw new Error("Não foi possível enviar a confirmação.");

      form.reset();
      status.className = "rsvp-status success";
      status.textContent = rsvp.mensagemSucesso;
    } catch (erro) {
      status.className = "rsvp-status error";
      status.textContent = "Não foi possível registrar sua presença agora. Tente novamente em alguns instantes.";
    } finally {
      button.disabled = false;
      button.textContent = "Confirmar presença";
    }
  });
}

// ---- Scroll Suave ----

function configurarScrollSuave() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// ---- Animações com Intersection Observer ----

function configurarAnimações() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(".animate-on-scroll")
    .forEach((el) => observer.observe(el));
}

// ---- Utilitários ----

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function formatarCategoria(cat) {
  const mapa = {
    "lua-de-mel": "🌙 Lua de Mel",
    casa: "🏠 Casa",
    quarto: "🛏️ Quarto",
    sala: "🛋️ Sala",
    cozinha: "🍳 Cozinha",
  };
  return mapa[cat] || cat;
}

// ---- Header scroll effect ----

let lastScroll = 0;
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const currentScroll = window.pageYOffset;

  if (currentScroll > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});
