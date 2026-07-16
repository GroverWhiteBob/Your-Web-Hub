const KEY = "ubu.user";

export type UbuUser = { name: string; email: string };

export function getUser(): UbuUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as UbuUser) : null;
  } catch {
    return null;
  }
}

export function signIn(user: UbuUser) {
  window.localStorage.setItem(KEY, JSON.stringify(user));
}

export function signOut() {
  window.localStorage.removeItem(KEY);
}
