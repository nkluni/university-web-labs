import { useEffect, useState } from "react";
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

const OPEN_DELAY_MS = 60000;

const inputClass =
    "w-full rounded-lg border border-slate-200 dark:border-[#1f3556] bg-slate-50 dark:bg-[#12233f] px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-sky-400";
const labelClass = "mt-2 text-[13px] font-semibold text-slate-500 dark:text-slate-400";

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState("");
    const [sending, setSending] = useState(false);

    useEffect(() => {
        const timerId = setTimeout(() => setIsOpen(true), OPEN_DELAY_MS);

        return () => clearTimeout(timerId);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    function closeModal() {
        setIsOpen(false);
        setStatus("");
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;

        if (FORMSPREE_URL.includes("YOUR_FORM_ID")) {
            setStatus("Вкажіть адресу Formspree у константі FORMSPREE_URL.");
            return;
        }

        setSending(true);
        setStatus("Надсилаємо…");

        try {
            const response = await fetch(FORMSPREE_URL, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" },
            });
            if (!response.ok) {
                throw new Error("Сервер відповів зі статусом " + response.status);
            }
            form.reset();
            setStatus("Дякуємо! Повідомлення надіслано.");
        } catch (err) {
            setStatus("Не вдалося надіслати: " + err.message);
        } finally {
            setSending(false);
        }
    }

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 p-4"
            onClick={closeModal}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="feedback-title"
                className="max-h-full w-full max-w-[480px] overflow-y-auto rounded-2xl bg-white dark:bg-[#0d1a2e] p-7 shadow-2xl"
                onClick={(event) => event.stopPropagation()}
            >
                <form action={FORMSPREE_URL} method="POST" onSubmit={handleSubmit} className="grid gap-1.5">
                    <h2 id="feedback-title" className="mb-2.5 text-xl font-bold tracking-wide text-slate-900 dark:text-slate-100">
                        Зворотний зв'язок
                    </h2>

                    <label htmlFor="fb-name" className={labelClass}>Name</label>
                    <input id="fb-name" name="name" type="text" autoComplete="name" required className={inputClass} />

                    <label htmlFor="fb-email" className={labelClass}>Email</label>
                    <input id="fb-email" name="email" type="email" autoComplete="email" required className={inputClass} />

                    <label htmlFor="fb-phone" className={labelClass}>Phone</label>
                    <input id="fb-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />

                    <label htmlFor="fb-message" className={labelClass}>Message</label>
                    <textarea id="fb-message" name="message" rows={4} required className={`${inputClass} resize-y`} />

                    <p role="status" className="mt-1.5 min-h-6 text-[13px] text-cyan-700 dark:text-cyan-300">
                        {status}
                    </p>

                    <div className="flex justify-end gap-2.5">
                        <button
                            type="submit"
                            disabled={sending}
                            className="cursor-pointer rounded-lg bg-linear-to-br from-sky-400 to-blue-500 px-[18px] py-2.5 text-sm font-bold text-white disabled:cursor-wait disabled:opacity-60"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={closeModal}
                            className="cursor-pointer rounded-lg bg-slate-200 dark:bg-slate-700 px-[18px] py-2.5 text-sm font-bold text-slate-900 dark:text-slate-100"
                        >
                            Закрити
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;