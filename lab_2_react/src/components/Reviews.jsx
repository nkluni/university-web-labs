import { useEffect, useState } from "react";
const REVIEWS_URL = "https://jsonplaceholder.typicode.com/posts/20/comments";

function Reviews() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        async function loadReviews() {
            try {
                const response = await fetch(REVIEWS_URL, { signal: controller.signal });
                if (!response.ok) {
                    throw new Error("Сервер відповів зі статусом " + response.status);
                }
                const data = await response.json();
                setComments(data);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        loadReviews();

        return () => controller.abort();
    }, []);

    return (
        <section id="reviews">
            <h2 className="mb-5 flex items-center gap-3 text-xl font-bold uppercase tracking-[0.1em] text-slate-900 dark:text-slate-100">
                <span className="h-6 w-[5px] shrink-0 rounded-sm bg-gradient-to-b from-sky-400 to-blue-500" />
                Reviews
            </h2>

            <p role="status" className="mb-3.5 text-sm text-slate-500 dark:text-slate-400">
                {loading && "Завантаження відгуків…"}
                {error && "Не вдалося завантажити відгуки: " + error}
                {!loading && !error && "Показано відгуків: " + comments.length}
            </p>

            <div className="grid gap-3.5">
                {comments.map((comment) => (
                    <article
                        key={comment.id}
                        className="rounded-[14px] border border-slate-200 dark:border-[#1f3556] bg-slate-50 dark:bg-[#12233f] px-5 py-[18px]"
                    >
                        <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                            <h3 className="text-lg font-bold capitalize text-slate-900 dark:text-slate-100 [overflow-wrap:anywhere]">
                                {comment.name}
                            </h3>
                            <p className="whitespace-nowrap text-sm font-semibold text-sky-400">
                                #{comment.id}
                            </p>
                        </header>

                        <p className="mt-0.5 text-[13px] font-semibold text-cyan-700 dark:text-cyan-300">
                            {comment.email}
                        </p>
                        <p className="mt-2.5 text-sm text-slate-500 dark:text-slate-400">{comment.body}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Reviews;