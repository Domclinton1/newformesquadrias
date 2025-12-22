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

function enviarWhatsApp(event, tipo) {
  event.preventDefault();

  let mensagem = "";

  if (tipo === "esquadria") {
    mensagem = "Olá, gostaria de um orçamento de esquadrias de alumínio";
  }

  if (tipo === "vidro") {
    mensagem = "Olá, gostaria de um orçamento de vidros temperados";
  }

  // Evento de conversão
  if (typeof fbq === "function") {
    fbq("track", "Lead");
  }

  const telefone = "5531996733778";
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}

const nomes = [
  "Carlos Souza",
  "Marcos Guilherme",
  "João Paulo",
  "Ana Maria",
  "Fernanda Moraes",
  "Ricardo Augusto",
  "Paulo Roberto",
  "Rafael Silva",
  "Marisa Kollut",
  "Julia Bittencourt",
  "José Henrique",
  "Geraldo Ribeiro",
  "Maria Clara",
];
const cidades = [
  "Belo Horizonte - MG",
  "Contagem - MG",
  "Betim - MG",
  "Venda Nova - BH",
  "Santa Luzia - MG",
  "Sabará - MG",
  "Caeté - MG",
  "Nova Lima - MG",
  "Aplhaville, Nova Lima - MG",
  "Uberlandia - MG",
  "Montes Claros - MG",
  "Sete Lagoas - MG",
  "Governador Valadares - MG",
];

const proofBox = document.getElementById("social-proof");

function mostrarNotificacao() {
  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  const cidade = cidades[Math.floor(Math.random() * cidades.length)];
  const minutos = Math.floor(Math.random() * 10) + 1;

  proofBox.innerHTML = `
    🔔 <strong>${nome} </strong> solicitou orçamento<br>
    📍 ${cidade}<br>
    ⏱️ há ${minutos} minutos
  `;

  proofBox.style.display = "block";

  setTimeout(() => {
    proofBox.style.display = "none";
  }, 6000);
}

// primeira após 8 segundos
setTimeout(mostrarNotificacao, 8000);

// depois a cada 25–40s
setInterval(
  mostrarNotificacao,
  Math.floor(Math.random() * (30000 - 20000)) + 20000
);
