document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("typewriter");
    const words = ["I'm Danylo", "I do Web-Development", "I live in Berlin", "I'm from Ukraine"];
    let wordIndex = 0;
    let letterIndex = 0;

    const type = () => {
        if (letterIndex < words[wordIndex].length) {
            textElement.textContent += words[wordIndex][letterIndex];
            letterIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1000);
        }
    }

    const erase = () => {
        if (letterIndex > 0) {
            textElement.textContent = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, 50);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        }
    }

    type();
});
