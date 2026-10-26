"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

type Status = "idle" | "verifying" | "success" | "error";

function StatusIcon({ status }: { status: Status }) {
  return (
    <div className="relative mx-auto flex h-16 w-16 items-center justify-center">
      <div
        className={
          "absolute inset-0 rounded-full border-2 transition-colors duration-300 " +
          (status === "success"
            ? "border-gold bg-navy"
            : status === "error"
              ? "border-red-300"
              : "border-navy/20")
        }
      />
      {status === "verifying" && (
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-gold border-t-transparent" />
      )}
      {status === "success" ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-7 w-7 text-gold"
          style={{ animation: "logaval-pop 0.35s ease-out" }}
        >
          <path
            d="m5 13 4 4 10-10"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : status === "error" ? (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-red-500">
          <path
            d="M12 8v5M12 16h.01"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-navy">
          <rect
            x="5.5"
            y="10.5"
            width="13"
            height="9"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  );
}

export default function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const title =
    status === "success"
      ? "Acceso correcto"
      : status === "error"
        ? "Contraseña incorrecta"
        : status === "verifying"
          ? "Verificando..."
          : "Panel LOGAVAL";

  const subtitle =
    status === "success"
      ? "Entrando al panel..."
      : status === "error"
        ? "Inténtalo de nuevo."
        : status === "verifying"
          ? "Un momento, por favor."
          : "Introduce la contraseña para continuar.";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "verifying" || status === "success") return;
    setStatus("verifying");
    try {
      const res = await fetch("/admin/login/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        setStatus("success");
        setTimeout(() => router.push("/admin"), 650);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        "w-full max-w-sm space-y-5 rounded-sm border bg-white p-8 shadow-sm transition-[border-color] duration-300 " +
        (status === "error" ? "border-red-200" : "border-navy/15")
      }
      style={status === "error" ? { animation: "logaval-shake 0.4s" } : undefined}
    >
      <StatusIcon status={status} />

      <div className="text-center">
        <h1 className="font-serif text-2xl text-navy">{title}</h1>
        <p className="mt-1.5 text-sm text-navy/60">{subtitle}</p>
      </div>

      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        autoFocus
        required
        value={password}
        disabled={status === "verifying" || status === "success"}
        onChange={(e) => {
          setPassword(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        className="w-full rounded-sm border border-navy/20 bg-transparent px-3 py-2.5 text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none disabled:opacity-60"
      />

      <button
        type="submit"
        disabled={status === "verifying" || status === "success"}
        className="flex w-full items-center justify-center gap-2 rounded-sm bg-navy px-6 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-gold disabled:cursor-not-allowed disabled:opacity-80"
      >
        {status === "verifying"
          ? "Verificando..."
          : status === "success"
            ? "Listo"
            : "Entrar"}
      </button>

      <style>{`
        @keyframes logaval-pop {
          0% { transform: scale(0.5); opacity: 0; }
          60% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); }
        }
        @keyframes logaval-shake {
          10%, 90% { transform: translateX(-1px); }
          20%, 80% { transform: translateX(2px); }
          30%, 50%, 70% { transform: translateX(-4px); }
          40%, 60% { transform: translateX(4px); }
        }
      `}</style>
    </form>
  );
}
