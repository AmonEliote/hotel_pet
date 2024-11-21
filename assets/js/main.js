//Login via Redes Sociais Simulado
const socialLinks = document.querySelectorAll('.login-botton a');
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert(`Login com ${link.querySelector('img').alt} em construção.`);
    });
});

//Carousel
const imagens = [
    'assets/images/img2.jpeg',
    'assets/images/img1.jpeg',
    'assets/images/img3.jpeg',
    'assets/images/img4.jpeg'
];
let indiceImagem = 0;

function alternarImagem() {
    const bannerImg = document.getElementById('banner');
    bannerImg.src = imagens[indiceImagem];
    indiceImagem = (indiceImagem + 1) % imagens.length;
}
setInterval(alternarImagem, 3000);

//Animação ao clicar em um botão
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    button.classList.add("clicked");

    setTimeout(() => {
      button.classList.remove("clicked");
    }, 300);
  });
});

//Limpar campo de pesquisa
  const limparButton = document.getElementById("limpar");
  const pesquisaInput = document.getElementById("pesquisa");

  limparButton.addEventListener("click", function() {
    pesquisaInput.value = "";
  });
