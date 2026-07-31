// ============================================
// GERADOR DE CÓDIGO PIX (BR Code / EMV)
// ============================================

/**
 * Calcula CRC16 conforme padrão usado pelo PIX
 */
function crc16(str) {
  let crc = 0xffff;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = (crc << 1) ^ 0x1021;
      } else {
        crc = crc << 1;
      }
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

/**
 * Formata um campo EMV com ID, tamanho e valor
 */
function formatField(id, value) {
  const size = String(value.length).padStart(2, "0");
  return `${id}${size}${value}`;
}

/**
 * Remove acentos de uma string
 */
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/**
 * Gera o código PIX "copia e cola" a partir dos dados fornecidos
 */
function gerarCodigoPIX({
  chavePIX,
  nomeTitular,
  cidade,
  valor,
  descricao = "",
  txid = "***",
}) {
  // Merchant Account Information (ID 26)
  const gui = formatField("00", "br.gov.bcb.pix");
  const chave = formatField("01", chavePIX);
  const merchantAccount = formatField("26", gui + chave);

  // Additional Data Field Template (ID 62)
  const txidField = formatField("05", txid);
  const additionalData = formatField("62", txidField);

  // Dados do recebedor
  const nome = removeAccents(nomeTitular.toUpperCase()).substring(0, 25);
  const cidadeClean = removeAccents(cidade.toUpperCase()).substring(0, 15);

  // Monta o payload
  let payload = "";
  payload += formatField("00", "01"); // Payload Format Indicator
  payload += merchantAccount; // Merchant Account Info
  payload += formatField("52", "0000"); // Merchant Category Code
  payload += formatField("53", "986"); // Currency (BRL)

  // Valor (opcional)
  if (valor && valor > 0) {
    payload += formatField("54", valor.toFixed(2));
  }

  payload += formatField("58", "BR"); // Country
  payload += formatField("59", nome); // Merchant Name
  payload += formatField("60", cidadeClean); // Merchant City
  payload += additionalData; // Additional Data

  // Adiciona campo de CRC (placeholder para cálculo)
  payload += "6304";
  const checksum = crc16(payload);

  return payload + checksum;
}

/**
 * Copia texto para a área de transferência
 */
async function copiarParaClipboard(texto) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(texto);
    } else {
      // Fallback para navegadores mais antigos
      const textArea = document.createElement("textarea");
      textArea.value = texto;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }
    return true;
  } catch (err) {
    console.error("Erro ao copiar:", err);
    return false;
  }
}
