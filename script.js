function crearDulce() {
  let dulce = document.createElement("div");
  let dulces = ["🕷️", "🍭", "🍫", "🍡", "🍬", "💀"];
  dulce.innerHTML = dulces[Math.floor(Math.random() * dulces.length)];

  dulce.style.position = "fixed";
  dulce.style.top = "-50px";
  dulce.style.left = Math.random() * 100 + "vw";
  dulce.style.fontSize = (20 + Math.random() * 20) + "px";
  dulce.style.zIndex = "9999";
  dulce.style.pointerEvents = "none";

  document.body.appendChild(dulce);

  let duracion = 3 + Math.random() * 4;

  dulce.animate(
    [
      { transform: "translateY(0) rotate(0deg)" },
      { transform: "translateY(110vh) rotate(360deg)" }
    ],
    { duration: duracion * 1000, easing: "linear" }
  );

  setTimeout(function () {
    dulce.remove();
  }, duracion * 1000);
}

// El botón prende y apaga la lluvia de dulces
let boton = document.querySelector("button");
let lluvia = null;

boton.addEventListener("click", function () {
  if (lluvia === null) {
    lluvia = setInterval(crearDulce, 300);
    boton.textContent = "¡Ya basta de dulces!";
  } else {
    clearInterval(lluvia);
    lluvia = null;
    boton.textContent = "Dulce o truco";
  }
});