import { useEffect, useState } from "react";

const STORAGE_KEY = "systemInfo";

function Footer() {
    const [info, setInfo] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        try {
            const data = {
                userAgent: navigator.userAgent,
                platform: navigator.platform,
            };

            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            setInfo(JSON.parse(localStorage.getItem(STORAGE_KEY)));
        } catch (err) {
            setError(err.message);
        }
    }, []);

    return (
        <footer className="border-t border-white/10 bg-[#0b1b33] px-7 pb-5 pt-6 text-[#cbd8e8] lg:col-span-2">
            <h2 className="mb-3.5 text-sm font-bold uppercase tracking-[0.16em] text-sky-300">
                System info
            </h2>

            {info && (
                <dl className="m-0 grid grid-cols-1 gap-x-5 gap-y-1.5 text-[13px] sm:grid-cols-[max-content_minmax(0,1fr)]">
                    <dt className="mt-2 font-semibold text-sky-300 sm:mt-0">User agent</dt>
                    <dd className="m-0 [overflow-wrap:anywhere]">{info.userAgent}</dd>

                    <dt className="mt-2 font-semibold text-sky-300 sm:mt-0">Platform</dt>
                    <dd className="m-0 [overflow-wrap:anywhere]">{info.platform}</dd>
                </dl>
            )}

            {error && (
                <p className="text-[13px]">Не вдалося отримати дані: {error}</p>
            )}

            <small className="mt-4 block text-xs text-[#8fa3bb]">
                &copy; 2026 Pylyptsiv Alina
            </small>
        </footer>
    );
}

export default Footer;