const snow = document.getElementById("snow");

for (let i = 0; i < 120; i++) {
    const flake = document.createElement("div");
    flake.textContent = "❄";

    flake.style.position = "fixed";
    flake.style.left = Math.random() * 100 + "vw";
    flake.style.top = Math.random() * -100 + "px";
    flake.style.fontSize = (10 + Math.random() * 20) + "px";
    flake.style.opacity = Math.random() * 0.8 + 0.2;
    flake.style.color = "white";
    flake.style.pointerEvents = "none";
    flake.style.userSelect = "none";

    const duration = 5 + Math.random() * 8;
    const delay = Math.random() * 10;

    flake.style.animation = `fall ${duration}s linear infinite`;
    flake.style.animationDelay = `${delay}s`;

    snow.appendChild(flake);
}

const snowStyle = document.createElement("style");

snowStyle.textContent = `
    @keyframes fall {
        from {
            transform: translateY(-100px);
        }

        to {
            transform: translateY(110vh);
        }
    }
`;

document.head.appendChild(snowStyle);


const pageLinks = document.querySelectorAll("[data-page]");
const pageSections = document.querySelectorAll(".page-section");

 const availablePages = [
    "home",
    "regelwerk",
    "fraktionsregelwerk",
    "serverinhaber"
];

function openPage(pageId, updateHistory = true) {
    if (!availablePages.includes(pageId)) {
        pageId = "home";
    }

    pageSections.forEach((section) => {
        section.hidden = section.id !== pageId;
    });

    pageLinks.forEach((link) => {
        link.classList.toggle(
            "active",
            link.dataset.page === pageId
        );
    });

   const titles = {
    home: "Frost Island RP",
    regelwerk: "Regelwerk | Frost Island RP",
    fraktionsregelwerk:
        "Fraktionsregelwerk | Frost Island RP",
    serverinhaber:
        "Serverinhaber | Frost Island RP"
};

    document.title = titles[pageId];

    if (
        updateHistory &&
        window.location.hash !== `#${pageId}`
    ) {
        history.pushState(
            { pageId },
            "",
            `#${pageId}`
        );
    }

    window.scrollTo({
        top: 0,
        behavior: updateHistory ? "smooth" : "auto"
    });
}

pageLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        openPage(link.dataset.page);
    });
});

window.addEventListener("popstate", () => {
    const pageId = window.location.hash.substring(1);
    openPage(pageId, false);
});

const firstPage =
    window.location.hash.substring(1) || "home";

openPage(firstPage, false);