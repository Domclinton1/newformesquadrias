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
