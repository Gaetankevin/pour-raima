// app/je-taime/page.tsx
'use client';

import { useState } from 'react';

export default function JeTaimePage() {
  const [pulse, setPulse] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50 flex items-center justify-center p-6">
      <section
        className={`relative max-w-xl w-full rounded-2xl p-8 md:p-12 shadow-2xl transform transition-all duration-500 ${
          pulse ? 'scale-[1.03]' : 'scale-100'
        }`}
        onMouseEnter={() => setPulse(true)}
        onMouseLeave={() => setPulse(false)}
        aria-label="Message d'amour"
      >
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-pink-300 via-rose-300 to-indigo-300 blur opacity-30 animate-tilt" />
        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/60">
          <header className="flex items-center gap-4 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-12 w-12 md:h-14 md:w-14 shrink-0"
              role="img"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ff7bb0" />
                  <stop offset="100%" stopColor="#ff476f" />
                </linearGradient>
              </defs>
              <path
                fill="url(#g)"
                d="M12 21s-7-4.435-9.243-7.04C-0.053 9.867 3.28 4 8.5 6.5 10.2 7.36 12 9 12 9s1.8-1.64 3.5-2.5C20.72 4 24.053 9.867 21.243 13.96 19 17.565 12 21 12 21z"
              />
            </svg>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold leading-tight tracking-tight text-rose-600">
                je t'aime
              </h1>
              <p className="text-sm md:text-base text-gray-500 mt-1">
                Un message simple, sincère et bien posé.
              </p>
            </div>
          </header>

          <article className="prose prose-sm md:prose-base max-w-none text-gray-700">
            <p className="text-lg md:text-xl">
              Je te le dis sans détour : <span className="font-semibold text-rose-600">je t'aime</span>.
              Que ce soit dans un souffle ou dans un cri silencieux, ces mots portent plus que des lettres — ils portent une vérité.
            </p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  const el = document.createElement('div');
                  el.textContent = "❤️ Sent!";
                  el.className = "fixed bottom-6 right-6 rounded-full bg-rose-600 text-white px-4 py-2 shadow-lg";
                  document.body.appendChild(el);
                  setTimeout(() => el.remove(), 1200);
                }}
                className="inline-flex items-center gap-2 rounded-md bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow hover:brightness-95 active:scale-95 transition"
              >
                Envoyer 💌
              </button>

              <button
                onClick={() => navigator.clipboard?.writeText("je t'aime")}
                className="inline-flex items-center gap-2 rounded-md border border-rose-200 bg-white px-4 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 transition"
              >
                Copier le message
              </button>
            </div>

            <footer className="mt-6 text-xs text-gray-400">
              Stylisé avec Tailwind — sobre, traditionnel, efficace.
            </footer>
          </article>
        </div>
      </section>

      <style jsx>{`
        .animate-tilt {
          animation: tilt 8s linear infinite;
        }
        @keyframes tilt {
          0% { transform: rotate(0deg) translateZ(0); }
          50% { transform: rotate(2deg) translateZ(0); }
          100% { transform: rotate(0deg) translateZ(0); }
        }
      `}</style>
    </main>
  );
}
