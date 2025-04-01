document.addEventListener("DOMContentLoaded", () => {
    const codeBlocks = document.querySelectorAll(".code");
    if (codeBlocks.length === 0) return;

    codeBlocks.forEach(codeBlock => {
        let button = document.createElement("button");
        button.classList.add("copy_button");
        button.innerText = "Kopiuj kod";

        button.addEventListener("click", () => {
            let codeElements = codeBlock.querySelectorAll("pre, p");
            if (!codeElements.length) return;

            let codeText = Array.from(codeElements)
                .map(el => el.innerText)
                .join("\n");

            navigator.clipboard.writeText(codeText).then(() => {
                button.innerText = "Skopiowano";
                setTimeout(() => button.innerText = "Kopiuj kod", 2000);
            });
        });

        codeBlock.prepend(button);
    });
});