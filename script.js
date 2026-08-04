const snow = document.getElementById("snow");

// Schneeflocken erstellen
for (let i = 0; i < 120; i++) {
    const flake = document.createElement("div");

    flake.innerHTML = "❄";
    flake.style.position = "fixed";
    flake.style.left = Math.random() * 100 + "vw";
    flake.style.top = Math.random() * -100 + "px";
    flake.style.fontSize = (10 + Math.random() * 20) + "px";
    flake.style.opacity = Math.random() * 0.8 + 0.2;
    flake.style.color = "white";
    flake.style.pointerEvents = "none";
    flake.style.userSelect = "none";
    flake.style.zIndex = "9999";

    const duration = 5 + Math.random() * 8;
    const delay = Math.random() * 10;

    flake.style.animation = `fall ${duration}s linear infinite`;
    flake.style.animationDelay = `${delay}s`;

    snow.appendChild(flake);
}

// Animation hinzufügen
const style = document.createElement("style");

style.textContent = `
@keyframes fall {
    0%{
        transform: translateY(-100px);
    }
    100%{
        transform: translateY(110vh);
    }
}
`;

document.head.appendChild(style);