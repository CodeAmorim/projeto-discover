function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // Maneira mais verbosa
  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Tobias Amorim sorrindo, usando camisa preta, barba, de oculos escuros e fundo em gradiente horizontal — do roxo médio à esquerda para azul claro à direita",
    )
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Tobias Amorim sorrindo, usando camisa preta, barba e fundo amarelo",
    )
  }
}
