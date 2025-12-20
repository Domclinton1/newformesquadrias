// Menu responsivo
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const overlay = document.getElementById("menuOverlay");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

// formulario do whatsapp
document
  .getElementById("form-whatsapp")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const campos = ["nome", "endereco", "mensagem"];
    let valido = true;

    campos.forEach((id) => {
      const el = document.getElementById(id);
      if (!el.value.trim()) {
        el.classList.add("error");
        valido = false;
      } else {
        el.classList.remove("error");
      }
    });

    if (!valido) {
      document.getElementById("feedback").textContent =
        "Preencha todos os campos para continuar.";
      return;
    }

    const texto = `Olá, gostaria de solicitar um orçamento.

👤 *Nome:* ${nome.value}
📍 *Endereço da obra:* ${endereco.value}
📝 *Mensagem:* ${mensagem.value}`;

    /* Evento de conversão */
    if (typeof fbq === "function") {
      fbq("track", "Lead");
    }

    const telefone = "5531996733778";
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    document.getElementById("feedback").textContent =
      "Redirecionando para o WhatsApp...";

    window.open(url, "_blank");
  });
document.getElementById("ano").textContent = new Date().getFullYear();

// script do FAQ
document.querySelectorAll(".faq-pergunta").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("active");
  });
});

// geolocalização
let localUsuario = null;

fetch("https://ipapi.co/json/")
  .then((res) => res.json())
  .then((data) => {
    localUsuario = data;

    const area = document.getElementById("area-atendimento");
    if (!area) return;

    if (data.region_code === "MG") {
      area.innerHTML = `Atendemos em <strong>${data.city}</strong> e região`;
    } else {
      area.innerHTML = "Atendemos Belo Horizonte e toda Minas Gerais";
    }
  })
  .catch(() => {
    document.getElementById("area-atendimento").innerHTML =
      "Atendemos Belo Horizonte e toda Minas Gerais";
  });

//notificações provas sociais
const notificacao = document.getElementById("notificacaoOrcamento");
const textoNotificacao = document.getElementById("textoNotificacao");

const nomes = ["Carlos", "João", "Ana", "Marcos", "Fernanda", "Paulo", "Lucas"];

function gerarMensagem(local) {
  const nome = nomes[Math.floor(Math.random() * nomes.length)];

  if (!local) {
    return `${nome} acabou de solicitar um orçamento`;
  }

  if (local.region_code === "MG") {
    return `${nome} solicitou orçamento em ${local.city}`;
  }

  return `${nome} solicitou orçamento em Minas Gerais`;
}

function exibirNotificacao() {
  if (!notificacao || !textoNotificacao) return;

  textoNotificacao.textContent = gerarMensagem(localUsuario);
  notificacao.classList.add("ativa");

  setTimeout(() => {
    notificacao.classList.remove("ativa");
  }, 5000);
}

setTimeout(exibirNotificacao, 3000);
setInterval(exibirNotificacao, 14000);
