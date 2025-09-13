const modal = document.getElementById("contact_modal");
const main = document.getElementById("main_wrapper");
const body = document.querySelector("body")

const handleEscapeModal = (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
}

export const displayModal = () => {
  modal.style.display = "block";
  modal.removeAttribute("inert")
  modal.setAttribute("tabindex", "-1")
  modal.focus()

  main.setAttribute("inert", "")
  body.classList.add("modal-open")
  document.addEventListener("keydown", handleEscapeModal)

  main.style.overflowY = "hidden"
};


export const closeModal = () => {
  const contactButton = document.querySelector(".contact_button");
  modal.style.display = "none";
  modal.setAttribute("inert", "")
  modal.removeAttribute("tabindex", "-1")
  main.removeAttribute("inert")
  body.classList.remove("modal-open")

  document.removeEventListener("keydown", handleEscapeModal)
  if (contactButton) {
   contactButton.focus();
  }
}

export const initModal = () => {
  const buttonModale = document.querySelector(".contact_button");
  const buttonClose = document.querySelector(".close-button");

  buttonModale.addEventListener("click", displayModal);
  buttonModale.addEventListener("keydown", (e) => {
   if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    displayModal();
   }
  })
  buttonClose.addEventListener("click", closeModal);
  buttonClose.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " " ) {
      e.preventDefault();
      closeModal();
    }
  })

  initForm();
}


const initForm = () => {

  // Recuperations des valeurs et log des champs
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const formEntries = Object.fromEntries(formData.entries());
    closeModal()
    form.reset()

    console.log(
      "full data object", formEntries
    )
  })
}
