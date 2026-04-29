const objeto = document.querySelector(".objeto3d");

if (objeto) {
    objeto.addEventListener("mousemove", (e) => {
        const rect = objeto.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        objeto.style.transform = `
            rotateX(${y / 20}deg)
            rotateY(${x / 20}deg)
            scale(1.08)
        `;
    });

    objeto.addEventListener("mouseleave", () => {
        objeto.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });
}
