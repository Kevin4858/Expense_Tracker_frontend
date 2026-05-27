function parseApiOrigin(value) {
  if (!value) return "";
  const trimmed = value.replace(/\/+$/, "");
  if (!/^https?:\/\//i.test(trimmed)) return "";
  try {
    const url = new URL(trimmed);
    if (url.protocol === "http:" || url.protocol === "https:") {
      return url.origin;
    }
  } catch {
    /* invalid URL */
  }
  return "";
}

const rawUrl = parseApiOrigin(import.meta.env.VITE_API_URL);

export const API_URL = rawUrl || (import.meta.env.DEV ? "http://localhost:4000" : "");
export const API_BASE = rawUrl
  ? `${rawUrl}/api`
  : import.meta.env.DEV
    ? "http://localhost:4000/api"
    : "/api";
