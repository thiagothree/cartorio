// ============================================
// ANO ATUAL
// ============================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ============================================
// HEADER AO ROLAR
// ============================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ============================================
// MENU MOBILE
// ============================================

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.querySelector(".navigation");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("mobile-active");

});


// Fecha o menu ao clicar em um link

document.querySelectorAll(".navigation a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("mobile-active");

    });

});


// ============================================
// ANIMAÇÕES DE ENTRADA
// ============================================

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".service-card, " +
        ".about-title, " +
        ".about-content, " +
        ".protocol-box, " +
        ".value, " +
        ".contact-main, " +
        ".contact-details"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// ============================================
// CONSULTA DE PROTOCOLO
// ============================================

const protocolForm =
    document.getElementById("protocolForm");

const protocolInput =
    document.getElementById("protocol");

const protocolResult =
    document.getElementById("protocolResult");


const modal =
    document.getElementById("modal");

const modalText =
    document.getElementById("modalText");

const closeModal =
    document.getElementById("closeModal");

const modalButton =
    document.getElementById("modalButton");


protocolForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const protocol =
        protocolInput.value.trim();


    if (protocol.length < 5) {

        modalText.textContent =
            "Informe um número de protocolo válido para realizar a consulta.";

        modal.classList.add("active");

        document.body.classList.add("no-scroll");

        return;

    }


    modalText.innerHTML =
        `
        O protocolo <strong>${protocol}</strong>
        foi localizado em nosso sistema.
        <br><br>
        <strong>Status:</strong> Em análise documental.
        <br>
        <strong>Previsão:</strong> 02/09/2026.
        `;


    modal.classList.add("active");

    document.body.classList.add("no-scroll");

});


// ============================================
// FECHAR MODAL
// ============================================

function closeModalWindow() {

    modal.classList.remove("active");

    document.body.classList.remove("no-scroll");

}


closeModal.addEventListener(
    "click",
    closeModalWindow
);


modalButton.addEventListener(
    "click",
    closeModalWindow
);


// Fecha clicando fora da caixa

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeModalWindow();

    }

});


// ============================================
// ESC FECHA O MODAL
// ============================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeModalWindow();

    }

});


// ============================================
// EFEITO PARALLAX NO SELO
// ============================================

const heroCard =
    document.querySelector(".hero-card");


if (window.innerWidth > 950) {

    heroCard.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                heroCard.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -4;

            const rotateY =
                ((x - centerX) / centerX) * 4;


            heroCard.style.transform =
                `
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                `;

        }
    );


    heroCard.addEventListener(
        "mouseleave",
        () => {

            heroCard.style.transform =
                "rotate(2deg)";

        }
    );

}


// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");


        if (
            targetId === "#" ||
            !document.querySelector(targetId)
        ) {

            return;

        }


        event.preventDefault();


        document
            .querySelector(targetId)
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});
