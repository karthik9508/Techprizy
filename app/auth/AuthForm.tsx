"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function AuthForm() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const isSignIn = mode === "signin";

  async function handleSubmit(formData: FormData) {
    setPending(true);
    setError("");

    try {
      const supabase = createClient();
      const email = String(formData.get("email") || "").trim();
      const password = String(formData.get("password") || "").trim();
      const name = String(formData.get("name") || "").trim();

      if (!email || !password || (!isSignIn && !name)) {
        setError("Please fill in all required fields.");
        setPending(false);
        return;
      }

      if (isSignIn) {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (signInError) {
          setError(signInError.message);
          setPending(false);
          return;
        }
      } else {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { name },
          },
        });

        if (signUpError) {
          setError(signUpError.message);
          setPending(false);
          return;
        }
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to connect to Supabase.";
      setError(message);
      setPending(false);
      return;
    }
  }

  return (
    <div className="modern-panel rounded-[2rem] p-6 md:p-8">
      <div className="flex gap-2 rounded-full bg-[var(--accent-faint)] p-1">
        <button
          type="button"
          onClick={() => setMode("signin")}
          className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition ${
            isSignIn
              ? "bg-[var(--accent)] text-white"
              : "text-[var(--muted)] hover:text-[var(--accent)]"
          }`}
        >
          Sign In
        </button>
        <button
          type="button"
          onClick={() => setMode("signup")}
          className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition ${
            !isSignIn
              ? "bg-[var(--accent)] text-white"
              : "text-[var(--muted)] hover:text-[var(--accent)]"
          }`}
        >
          Sign Up
        </button>
      </div>

      <form action={handleSubmit} className="mt-6 space-y-4">
        {!isSignIn ? (
          <div>
            <label className="mb-2 block text-sm font-medium text-[var(--foreground)]">
              Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--accent-soft)]"
            />
          </div>
        ) : null}

        <div>
          <label className="mb-2 block text-sm font-medium text-[var(--foreground)]">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--accent-soft)]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[var(--foreground)]">
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Minimum 6 characters"
            className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--accent-soft)]"
          />
        </div>

        {error ? (
          <p className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-sm text-red-600">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-strong))] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending
            ? "Please wait..."
            : isSignIn
              ? "Sign In"
              : "Create Account"}
        </button>
      </form>
    </div>
  );
}
