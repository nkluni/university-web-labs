function collectSystemInfo() {
    return {
        "User agent": navigator.userAgent,
        "Platform": navigator.userAgentData?.platform || navigator.platform || "n/a",
        "Vendor": navigator.vendor || "n/a",
        "Language": navigator.language,
        "All languages": navigator.languages ? navigator.languages.join(", ") : "n/a",
        "Cookies enabled": String(navigator.cookieEnabled),
        "Online": String(navigator.onLine),
        "CPU threads": navigator.hardwareConcurrency ?? "n/a",
        "Device memory": navigator.deviceMemory ? navigator.deviceMemory + " GB" : "n/a",
        "Screen": `${screen.width}×${screen.height}`,
        "Time zone": Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
}

function saveSystemInfo() {
    localStorage.setItem("systemInfo", JSON.stringify(collectSystemInfo()));
}

function renderSystemInfo() {
    const list = document.getElementById("system-info");
    const saved = JSON.parse(localStorage.getItem("systemInfo"));

    list.replaceChildren();
    for (const [label, value] of Object.entries(saved)) {
        const dt = document.createElement("dt");
        dt.textContent = label;
        const dd = document.createElement("dd");
        dd.textContent = value;
        list.append(dt, dd);
    }
}

try {
    saveSystemInfo();
    renderSystemInfo();
} catch (error) {
    document.getElementById("system-info").textContent =
        "Не вдалося отримати дані: " + error.message;
}

const REVIEWS_URL = "https://jsonplaceholder.typicode.com/posts/20/comments";

function createReviewCard(comment) {
    const article = document.createElement("article");

    const header = document.createElement("header");
    const name = document.createElement("h3");
    name.textContent = comment.name;
    const id = document.createElement("p");
    id.textContent = "#" + comment.id;
    header.append(name, id);

    const email = document.createElement("p");
    email.className = "review-email";
    email.textContent = comment.email;

    const body = document.createElement("p");
    body.className = "review-body";
    body.textContent = comment.body;

    article.append(header, email, body);
    return article;
}

async function loadReviews() {
    const status = document.getElementById("reviews-status");
    const list = document.getElementById("reviews-list");

    try {
        const response = await fetch(REVIEWS_URL);
        if (!response.ok) {
            throw new Error("Сервер відповів зі статусом " + response.status);
        }

        const comments = await response.json();
        list.replaceChildren(...comments.map(createReviewCard));
        status.textContent = "Показано відгуків: " + comments.length;
    } catch (error) {
        status.textContent = "Не вдалося завантажити відгуки: " + error.message;
    }
}

loadReviews();

const FEEDBACK_DELAY_MS = 60000;

function initFeedbackModal() {
    const modal = document.getElementById("feedback-modal");
    const form = document.getElementById("feedback-form");
    const status = document.getElementById("feedback-status");
    const submitButton = document.getElementById("feedback-submit");
    const closeButton = document.getElementById("feedback-close");

    setTimeout(() => {
        if (!modal.open) {
            modal.showModal();
        }
    }, FEEDBACK_DELAY_MS);

    closeButton.addEventListener("click", () => modal.close());
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
    modal.addEventListener("close", () => {
        status.textContent = "";
    });

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const url = form.getAttribute("action");
        if (url.includes("YOUR_FORM_ID")) {
            status.textContent = "Вкажіть адресу Formspree в атрибуті action форми.";
            return;
        }

        status.textContent = "Надсилаємо…";
        submitButton.disabled = true;

        try {
            const response = await fetch(url, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" },
            });
            if (!response.ok) {
                throw new Error("Сервер відповів зі статусом " + response.status);
            }
            form.reset();
            status.textContent = "Дякуємо! Повідомлення надіслано.";
        } catch (error) {
            status.textContent = "Не вдалося надіслати: " + error.message;
        } finally {
            submitButton.disabled = false;
        }
    });
}

initFeedbackModal();

const DAY_START_HOUR = 7;  
const NIGHT_START_HOUR = 21; 

function getAutoTheme() {
    const hour = new Date().getHours();
    return hour >= DAY_START_HOUR && hour < NIGHT_START_HOUR ? "day" : "night";
}

function applyTheme(theme) {
    const button = document.getElementById("theme-toggle");
    const isNight = theme === "night";

    document.body.classList.toggle("dark-mode", isNight);
    button.textContent = isNight ? "☀️ Day" : "🌙 Night";
    button.setAttribute("aria-pressed", String(isNight));
}

function initTheme() {
    const button = document.getElementById("theme-toggle");

    let saved = null;
    try {
        saved = localStorage.getItem("theme");
    } catch (error) {
    }
    applyTheme(saved === "day" || saved === "night" ? saved : getAutoTheme());

    button.addEventListener("click", () => {
        const next = document.body.classList.contains("dark-mode") ? "day" : "night";
        applyTheme(next);
        try {
            localStorage.setItem("theme", next);
        } catch (error) {
        }
    });
}

initTheme();