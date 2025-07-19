import { getPhotographers } from "../utils/getPhotographer.js";

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
        const data = await getPhotographers();
        displayData(data.photographers);
        console.log("j'attend que toute la data charge")
    }


    init();
