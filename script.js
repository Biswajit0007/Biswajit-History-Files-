const search = document.getElementById("search");
const cards = [...document.querySelectorAll(".card")];

search.addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase().trim();

  cards.forEach((card) => {
    card.style.display = card.dataset.title.toLowerCase().includes(q)
      ? "block"
      : "none";
  });
});
