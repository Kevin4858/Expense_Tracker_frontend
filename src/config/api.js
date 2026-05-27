const rawUrl = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

export const API_URL = rawUrl || (import.meta.env.DEV ? "http://localhost:4000" : "");
export const API_BASE = rawUrl
  ? `${rawUrl}/api`
  : import.meta.env.DEV
    ? "http://localhost:4000/api"
    : "/api";
