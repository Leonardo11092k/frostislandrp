const snow = document.getElementById("snow");

for (let i = 0; i < 120; i++) {
    const flake = document.createElement("div");

    flake.innerHTML = "❄";
    flake.style.position = "fixed";
    flake.style.left = Math.random() * 100 + "vw";
    flake.style.top = Math.random() * -100 + "px";
    flake.style.fontSize = (10 + Math.random() * 20) + "px";
    flake.style.opacity = Math.random();
    flake.style.pointerEvents = "none";
    flake.style.animation = `fall ${5 + Math.random() * 10}s linear infinite`;
    flake.style.animationDelay = Math.random() * 10 + "s";

    snow.appendChild(flake);
}

const style = document.createElement("style");

style.innerHTML = `
@keyframes fall{
    from{
        transform:translateY(-100px);
    }
    to{
        transform:translateY(110vh);
    }
}
`;

document.head.appendChild(style);