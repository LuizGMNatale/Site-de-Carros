const campoFiltro = document.querySelector('search-input');
const cards = document.querySelectorAll('.card-wrapper');

campoFiltro.addEventListener('keyup', filterCards);

function filterCards() {
  if (campoFiltro.value != "") {
    for (let card of cards) {
      let title = card.querySelector("h3");
      title = title.textContent.toLowerCase;
      let filterText = campoFiltro.value.toLowerCase;
      if (!title.includes(filterText)) {
        card.style.display = "none";
      } else {
        card.style.display = "block"
      }
    }
  } else {
    for(let card of cards){
        card.style.display = "block"
    }
}
}
