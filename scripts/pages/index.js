    async function getPhotographers() {

              const response = await fetch("data/photographers.json");
        const data = await response.json();
        console.log(data[0])
        return data;
        // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
        // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
        // let photographers = [
        //     {
        //         "name": "Ma data test",
        //         "id": 1,
        //         "city": "Paris",
        //         "country": "France",
        //         "tagline": "Ceci est ma data test",
        //         "price": 400,
        //         "portrait": "account.png"
        //     },
        //     {
        //         "name": "Autre data test",
        //         "id": 2,
        //         "city": "Londres",
        //         "country": "UK",
        //         "tagline": "Ceci est ma data test 2",
        //         "price": 500,
        //         "portrait": "account.png"
        //     },
        //     {
        //         "name": "Délia super Star",
        //         "id": 3,
        //         "city": "Poissy",
        //         "country": "France",
        //         "tagline": "Lovely data 3",
        //         "price": 1500,
        //         "portrait": "account.png"
        //     },

        // ]


        // et bien retourner le tableau photographers seulement une fois récupéré
        // return ({
        //     photographers: [...photographers, ...photographers, ...photographers]})
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
