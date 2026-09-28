const root = document.documentElement;
const theme = document.getElementById("theme");

// =========================
// THEME
// =========================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
root.dataset.theme = "light";

```
if (theme) {
    theme.textContent = "☀";
    theme.setAttribute("aria-label", "Switch to dark mode");
}
```

} else {
delete root.dataset.theme;

```
if (theme) {
    theme.textContent = "☾";
    theme.setAttribute("aria-label", "Switch to light mode");
}
```

}

if (theme) {
theme.addEventListener("click", () => {
const isLight = root.dataset.theme === "light";

```
    if (isLight) {
        // Switch to Dark Mode
        delete root.dataset.theme;
        localStorage.setItem("theme", "dark");

        theme.textContent = "☾";
        theme.setAttribute("aria-label", "Switch to light mode");
    } else {
        // Switch to Light Mode
        root.dataset.theme = "light";
        localStorage.setItem("theme", "light");

        theme.textContent = "☀";
        theme.setAttribute("aria-label", "Switch to dark mode");
    }
});
```

}

// =========================
// MOBILE MENU
// =========================

const menu = document.querySelector(".menu");
const links = document.querySelector(".links");

if (menu && links) {

```
menu.addEventListener("click", () => {
    links.classList.toggle("open");
});

document.querySelectorAll(".links a").forEach((link) => {
    link.addEventListener("click", () => {
        links.classList.remove("open");
    });
});
```

}

// =========================
// SCROLL REVEAL
// =========================

const io = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {

```
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
        }

    });
},
{
    threshold: 0.12
}
```

);

document
.querySelectorAll(
"section, .skills-grid article, .projects-grid article, .timeline article"
)
.forEach((element) => {

```
    element.classList.add("reveal");
    io.observe(element);

});
```

// =========================
// SCROLL PROGRESS
// =========================

const progress = document.querySelector(".progress");

if (progress) {

```
addEventListener(
    "scroll",
    () => {

        const height =
            document.documentElement.scrollHeight - innerHeight;

        if (height > 0) {

            const percentage =
                (scrollY / height) * 100;

            progress.style.width =
                Math.min(percentage, 100) + "%";
        }

    },
    {
        passive: true
    }
);
```

}

// =========================
// FOOTER YEAR
// =========================

const year = document.getElementById("year");

if (year) {
year.textContent = new Date().getFullYear();
}
