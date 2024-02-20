function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light Meu.png")
  } else {
    //se tiver sem a light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar meu.png")
  }
}
