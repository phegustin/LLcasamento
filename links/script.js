// ============================================================
// SCRIPT PRINCIPAL — LINK NA BIO (LLCASAMENTO)
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  aplicarPerfil();
  renderizarLinks();
  configurarCompartilhamento();
});

// ---- Biblioteca de Ícones SVG ----
const ICONES_SVG = {
  camera: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
      <circle cx="12" cy="13" r="3.5"></circle>
    </svg>
  `,
  instagram: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  `,
  presente: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 12 20 22 4 22 4 12"></polyline>
      <rect x="2" y="7" width="20" height="5"></rect>
      <line x1="12" y1="22" x2="12" y2="7"></line>
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
    </svg>
  `,
  mapa: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  `,
  whatsapp: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  `,
  calendario: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  `,
  coracao: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  `,
  link: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  `,
};

// ---- 1. Aplicar dados do Perfil e Topo ----
function aplicarPerfil() {
  if (typeof CONFIG_LINKS === "undefined") return;

  const { perfil, rodape } = CONFIG_LINKS;

  // Foto de capa
  const fotoCapa = document.getElementById("foto-capa");
  if (fotoCapa && perfil.fotoCapa) {
    fotoCapa.src = perfil.fotoCapa;
    if (perfil.posicaoFotoCapa) {
      fotoCapa.style.objectPosition = perfil.posicaoFotoCapa;
    }
  }

  // Monograma
  const monoImg = document.getElementById("monograma-img");
  const monoFallback = document.getElementById("monograma-fallback");
  if (monoImg && perfil.monogramaImagem) {
    monoImg.src = perfil.monogramaImagem;
    monoImg.onerror = () => {
      monoImg.style.display = "none";
      if (monoFallback) {
        monoFallback.hidden = false;
        monoFallback.textContent = perfil.monogramaTexto || "L & L";
      }
    };
  }

  // Nomes e Título da Aba
  const elNomes = document.getElementById("nomes-casal");
  if (elNomes && perfil.nomes) {
    elNomes.textContent = perfil.nomes;
    document.title = `${perfil.nomes} | Links do Nosso Casamento`;
  }

  // Data / Subtítulo superior
  const elData = document.getElementById("data-casamento");
  if (elData) {
    if (perfil.dataCasamento) {
      elData.textContent = perfil.dataCasamento;
    } else {
      elData.style.display = "none";
    }
  }

  // Hashtag copiável
  const btnHashtag = document.getElementById("hashtag-btn");
  const txtHashtag = document.getElementById("hashtag-texto");
  if (btnHashtag && txtHashtag) {
    if (perfil.hashtag && perfil.hashtag.trim() !== "") {
      txtHashtag.textContent = perfil.hashtag;
      btnHashtag.addEventListener("click", async () => {
        await copiarTexto(perfil.hashtag);
        mostrarToast(`Hashtag ${perfil.hashtag} copiada! ✨`);
      });
    } else {
      btnHashtag.style.display = "none";
    }
  }

  // Mensagem de boas-vindas
  const elMensagem = document.getElementById("mensagem-casal");
  if (elMensagem && perfil.mensagem) {
    elMensagem.textContent = perfil.mensagem;
  }

  // Rodapé
  const elRodape = document.getElementById("rodape-texto");
  if (elRodape && rodape && rodape.texto) {
    elRodape.textContent = rodape.texto;
  }

  const btnQrFooter = document.getElementById("btn-abrir-qrcode");
  if (btnQrFooter && rodape && rodape.mostrarBotaoQrCode === false) {
    btnQrFooter.style.display = "none";
  }
}

// ---- 2. Renderizar os Botões de Link ----
function renderizarLinks() {
  const container = document.getElementById("links-list");
  if (!container || typeof CONFIG_LINKS === "undefined") return;

  container.innerHTML = "";

  const linksAtivos = (CONFIG_LINKS.links || []).filter(
    (item) => item.ativo !== false
  );

  linksAtivos.forEach((item, index) => {
    const linkEl = document.createElement("a");
    linkEl.className = `link-card ${item.destaque ? "is-featured" : ""}`;
    linkEl.href = item.url || "#";
    linkEl.style.animationDelay = `${0.1 + index * 0.1}s`;

    // Se for link externo, abre em nova aba
    if (item.url && item.url.startsWith("http")) {
      linkEl.target = "_blank";
      linkEl.rel = "noopener noreferrer";
    }

    const svgIcone = ICONES_SVG[item.icone] || ICONES_SVG.link;

    linkEl.innerHTML = `
      <div class="link-icon-box" aria-hidden="true">
        ${svgIcone}
      </div>
      <div class="link-body">
        ${item.tag ? `<span class="link-tag">${item.tag}</span>` : ""}
        <h2 class="link-title">${item.titulo}</h2>
        ${item.subtitulo ? `<p class="link-subtitle">${item.subtitulo}</p>` : ""}
      </div>
      <div class="link-arrow" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    `;

    container.appendChild(linkEl);
  });
}

// ---- 3. Modal de QR Code e Compartilhamento ----
let qrGerado = false;

function configurarCompartilhamento() {
  const modal = document.getElementById("qr-modal");
  const overlay = document.getElementById("qr-modal-overlay");
  const btnClose = document.getElementById("qr-modal-close");
  const btnQrFooter = document.getElementById("btn-abrir-qrcode");
  const btnShareTop = document.getElementById("btn-share-top");
  const btnCopyLink = document.getElementById("btn-copiar-link");

  const abrirModalQr = () => {
    if (!modal) return;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    if (!qrGerado && typeof QRCode !== "undefined") {
      const qrContainer = document.getElementById("qrcode-canvas");
      if (qrContainer) {
        qrContainer.innerHTML = "";
        new QRCode(qrContainer, {
          text: window.location.href,
          width: 190,
          height: 190,
          colorDark: "#2d3a2e",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.M,
        });
        qrGerado = true;
      }
    }
  };

  const fecharModalQr = () => {
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  };

  if (btnQrFooter) {
    btnQrFooter.addEventListener("click", abrirModalQr);
  }

  if (btnShareTop) {
    btnShareTop.addEventListener("click", async () => {
      // Em celulares com compartilhamento nativo, oferece o share ou abre o modal
      if (navigator.share) {
        try {
          await navigator.share({
            title: document.title,
            text: "Acesse o álbum compartilhado e o filtro do nosso casamento!",
            url: window.location.href,
          });
          return;
        } catch (_) {
          // Se o usuário cancelar ou falhar, abre o modal com QR Code
        }
      }
      abrirModalQr();
    });
  }

  if (btnClose) btnClose.addEventListener("click", fecharModalQr);
  if (overlay) overlay.addEventListener("click", fecharModalQr);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      fecharModalQr();
    }
  });

  if (btnCopyLink) {
    btnCopyLink.addEventListener("click", async () => {
      await copiarTexto(window.location.href);
      mostrarToast("Link da página copiado! 🔗");
    });
  }
}

// ---- Utilitários ----
async function copiarTexto(texto) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(texto);
      return true;
    }
  } catch (_) {}

  const textarea = document.createElement("textarea");
  textarea.value = texto;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  return true;
}

let toastTimer = null;
function mostrarToast(mensagem) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = mensagem;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}
