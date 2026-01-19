const modalMessages = {
  whatsapp: "Atendimento pelo WhatsApp em preparação. Em breve por aqui! 😺",
  loja: "Loja própria em construção. Acompanhe pelo Instagram por enquanto! ✨",
  shopee: "Loja na Shopee chegando em breve! 🛒",
};

const modalBackdrop = document.querySelector("[data-modal-backdrop]");
const modalMessage = document.querySelector(".cat-modal__message");
const modalTitle = document.querySelector("#cat-modal-title");
const closeButton = document.querySelector("[data-modal-close]");

const openModal = (type) => {
  if (!modalBackdrop || !modalMessage) return;
  modalMessage.textContent = modalMessages[type] || "";
  modalTitle.textContent = "Em breve";
  modalBackdrop.classList.add("is-open");
  modalBackdrop.setAttribute("aria-hidden", "false");
};

const closeModal = () => {
  if (!modalBackdrop) return;
  modalBackdrop.classList.remove("is-open");
  modalBackdrop.setAttribute("aria-hidden", "true");
};

document.querySelectorAll("[data-modal]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const type = button.getAttribute("data-modal");
    openModal(type);
  });
});

if (closeButton) {
  closeButton.addEventListener("click", closeModal);
}

if (modalBackdrop) {
  modalBackdrop.addEventListener("click", (event) => {
    if (event.target === modalBackdrop) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
