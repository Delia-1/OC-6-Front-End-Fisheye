    async function getPhotographers() {
      const response = await fetch("data/photographers.json");
      const data = await response.json();
      return data.photographers;
    }

    async function displayDataProfilePage(photographer) {
        const headerSection = document.querySelector(".photograph-header");
      if(headerSection) {
                // Réutilisation de photographerTemplate avec isHeader = true
        const photographerModel = photographerTemplate(photographer);
        const headerDOM = photographerModel.getUserCardDOM(true);
        headerSection.appendChild(headerDOM);
      }
    }

function getphotographerId() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
}

    async function init() {
      const photographId = getphotographerId();

      if(!photographId) {
        console.error('Aucun ID de photographe trouvé dans l\'URL');
        return;
      }
        // Récupère les datas des photographes
        const photographers  = await getPhotographers();
        const photographer = photographers.find(p => p.id === photographId);

            if (!photographer) {
        console.error('Photographe non trouvé');
        return;
    }
        await displayDataProfilePage(photographer)
        console.log("j'attend que toute la data charge encore")
    }

    init();
