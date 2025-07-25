  // Fetch and export data from json file
    export async function getPhotographers() {
      const response = await fetch("data/photographers.json");
      const data = await response.json();
      return data;
    }
