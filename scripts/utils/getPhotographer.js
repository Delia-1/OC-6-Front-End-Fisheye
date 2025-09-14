export const getPhotographers = async () => {
  const response = await fetch("data/photographers.json");
  const data = await response.json();
  return data;
};
