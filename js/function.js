function generaGriglia(numCelle, contenitoreCelle) {
  contenitoreCelle.innerHTML = " ";
  for (let i = 1; i <= numCelle; i++) {
    generaCella(contenitoreCelle, i);
  }
}

function generaCella(container, i) {
  const cella = document.createElement("div");
  cella.setAttribute("data-index", i);
  cella.classList.add("cella");
  cella.innerHTML = i;

  cella.addEventListener("click", () => {
    cella.classList.add("cella-cliccata");
    console.log(cella.innerHTML);
  });
  container.append(cella);
  console.log("test");
}
