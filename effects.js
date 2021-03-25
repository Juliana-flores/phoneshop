const phrase =
    '"O melhor lugar de fones é aqui! Tudo o que você precisa, você encontra."';
const element = document.querySelector(".site-title");
for (let i = 0; i < phrase.length; i++) {
    setTimeout(() => {
        element.innerHTML += phrase[i];
    }, i * 100);
}
