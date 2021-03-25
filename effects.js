const phrase =
    '"O melhor lugar de fones é aqui! <br> Tudo o que você precisa, você encontra."';
const element = document.querySelector(".mensagem");
for (let i = 0; i < phrase.length; i++) {
    setTimeout(() => {
        element.innerHTML += phrase[i];
    }, i * 100);
}
