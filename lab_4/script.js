// ===== Крок 1: системна інформація → localStorage → футер =====

// 1. Збираємо інформацію про операційну систему та браузер
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

// 2. Зберігаємо в localStorage. Він приймає лише рядки, тому об'єкт перетворюємо через JSON.stringify
function saveSystemInfo() {
    localStorage.setItem("systemInfo", JSON.stringify(collectSystemInfo()));
}

// 3. Читаємо з localStorage (JSON.parse повертає рядок назад в об'єкт) і малюємо у футері
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


// ===== Крок 2: відгуки з сервера (fetch) =====

// Адреса API для варіанта 20: коментарі до допису №20
const REVIEWS_URL = "https://jsonplaceholder.typicode.com/posts/20/comments";

// Створюємо картку одного відгуку. Текст вставляємо через textContent (безпечно)
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

// async/await: чекаємо відповідь сервера, не блокуючи сторінку
async function loadReviews() {
    const status = document.getElementById("reviews-status");
    const list = document.getElementById("reviews-list");

    try {
        const response = await fetch(REVIEWS_URL);
        // fetch не кидає помилку на 404/500, тому статус перевіряємо вручну
        if (!response.ok) {
            throw new Error("Сервер відповів зі статусом " + response.status);
        }

        const comments = await response.json();

        // Виводимо відгуки в тому порядку, у якому їх повернув сервер
        list.replaceChildren(...comments.map(createReviewCard));
        status.textContent = "Показано відгуків: " + comments.length;
    } catch (error) {
        status.textContent = "Не вдалося завантажити відгуки: " + error.message;
    }
}

loadReviews();