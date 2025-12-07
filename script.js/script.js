const text = ["IT Student"];
let index = 0;
let charIndex = 0;

function typeEffect() {
    const typingElement = document.querySelector(".typing");
    typingElement.textContent = text[index].slice(0, charIndex);

    charIndex++;

    if (charIndex > text[index].length) {
        setTimeout(() => {
            charIndex = 0;
            index = (index + 1) % text.length;
        }, 1000);
    }
}

setInterval(typeEffect, 120);
