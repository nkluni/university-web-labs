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