const root = document.documentElement;
const theme = document.getElementById("theme");

const saved = localStorage.getItem("theme");

if (saved === "light") {
    root.dataset.theme = "light";

    if (theme) {
        theme.textContent = "☀";
    }
}

if (theme) {
    theme.onclick = () => {
        const light = root.dataset.theme === "light";

        if (light) {
            delete root.dataset.theme;
            localStorage.setItem("theme", "dark");
            theme.textContent = "☾";
        } else {
            root.dataset.theme = "light";
            localStorage.setItem("theme", "light");
            theme.textContent = "☀";
        }
    };
}


const menu = document.querySelector(".menu");
const links = document.querySelector(".links");

if (menu && links) {
    menu.onclick = () => {
        links.classList.toggle("open");
    };

    document.querySelectorAll(".links a").forEach((a) => {
        a.onclick = () => {
            links.classList.remove("open");
        };
    });
}


const io = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.12
    }
);


document
    .querySelectorAll(
        "section, .skills-grid article, .projects-grid article, .timeline article"
    )
    .forEach((element) => {
        element.classList.add("reveal");
        io.observe(element);
    });


addEventListener(
    "scroll",
    () => {
        const height =
            document.documentElement.scrollHeight - innerHeight;

        if (height > 0) {
            const percentage = (scrollY / height) * 100;

            const progress = document.querySelector(".progress");

            if (progress) {
                progress.style.width = percentage + "%";
            }
        }
    },
    {
        passive: true
    }
);


const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}