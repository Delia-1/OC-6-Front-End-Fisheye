const modal = document.getElementById("contact_modal");
const main = document.getElementById("main_wrapper");
const body = document.querySelector("body")

export function displayModal() {
  modal.style.display = "block";
  modal.removeAttribute("inert")
  main.setAttribute("inert", "")
  body.classList.add("modal-open")
  // main.style.position = ("relative")
  main.style.overflowY = "hidden"
  console.log("modal opened")
};


// AUSSI BESOIN DE GERER LE CLAVIER EN ELISTENER

export function closeModal() {
  modal.style.display = "none";
  modal.setAttribute("inert", "")
  main.removeAttribute("inert")
  body.classList.remove("modal-open")
  console.log("modal closed")

}
export function initModal() {
  const buttonModale = document.querySelector(".contact_button");
  const buttonClose = document.querySelector(".close-button");

  buttonModale.addEventListener("click", displayModal);
  buttonClose.addEventListener("click", closeModal);

  initForm();
}


function initForm() {

  // Recuperations des valeurs et log des champs
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const firstname = formData.get("firstname")
    const lastname = formData.get("lastname")
    const email = formData.get("email")
    const message = formData.get("message")
    const formEntries = Object.fromEntries(formData.entries());
    closeModal()
    form.reset()

    console.log(
      "full data object", formEntries
    )
  })
}
