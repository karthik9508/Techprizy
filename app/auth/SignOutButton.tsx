"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--accent-strong)]"
    >
      Sign Out
    </button>
  );
}
