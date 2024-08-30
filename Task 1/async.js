async function fetchMarvelData() {
  const characterId = document.getElementById("Id").value;
  const response = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters/${characterId}?apikey=f148ab1c2f4a6d3a3a58ff32c6e036d1`
  );
  const characterData = await response.json();
  return characterData;
}

const displayData = async (Id) => {
  const info = document.getElementById("data");
  fetchMarvelData()
    .then(function (data) {
      const characterData = data.data.results;
      console.log(characterData);
      const name = characterData[0].name;
      const bio = characterData[0].description;
      info.innerHTML = `
    <p><span class='fw-bold'>Character Name: </span>${name}</p>
    <p><span class='fw-bold'>Character Description: </span>${bio}</p>
    `;
    })
    .catch(function (error) {
      alert(`An Error has Occured: ${error} (Probably Invalid Id)`);
    });
};

document.getElementById("search").addEventListener("click", (event) => {
  event.preventDefault();
  const Id = document.getElementById("Id");
  if (!Id.value) {
    alert("Error: Please enter a Value!");
  } else {
    displayData();
  }
});
