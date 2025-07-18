    async function getPhotographers() {

        const response = await fetch("data/photographers.json");
        const data = await response.json();
        console.log(data[0])
        return data;
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer, index) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
            console.log(photographer.name, ",", photographer.price)
        });
    }


    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
        console.log("j'attend que toute la data charge")
    }

    init();
