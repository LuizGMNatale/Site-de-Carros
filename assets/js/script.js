const campoFiltro = document.querySelector('#search-input');
const cards = document.querySelectorAll('.card-item');

campoFiltro.addEventListener('keyup', filterCards);

function filterCards() {
  if (campoFiltro.value != "") {
    for (let card of cards) {
      let title = card.querySelector('h3')
      title = title.textContent.toUpperCase()
      let filterText = campoFiltro.value.toUpperCase()
      if (!title.includes(filterText)) {
        card.style.display = "none"
      } else {
        card.style.display = "flex"
      }
    }
  } else {
    for(let card of cards){
        card.style.display = "flex"
    }
}
}
