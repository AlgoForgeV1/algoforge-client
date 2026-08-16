import { refreshAccessToken } from "./auth";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

function getUrl(endpoint: string): string {
  return endpoint.startsWith("http")
    ? endpoint
    : `${API_URL}${endpoint}`;
}

export async function authenticatedFetch(
  endpoint: string,
  options: RequestInit = {},
): Promise<Response> {
  const url = getUrl(endpoint);

  const headers = new Headers(options.headers);

  if (
    options.body &&
    !(options.body instanceof FormData) &&
    !headers.has("Content-Type")
  ) {
    headers.set("Content-Type", "application/json");
  }

  let response = await fetch(url, {
    ...options,
    headers,
    credentials: "include",
  });

  // Request succeeded.
  if (response.status !== 401) {
    return response;
  }

  // Access token may have expired.
  // Ask the backend to refresh it using the HttpOnly refresh cookie.
  try {
    await refreshAccessToken();
  } catch {
    window.location.href = "/login";
    return response;
  }

  // Backend has now rotated the cookies.
  // Retry the original request.
  response = await fetch(url, {
    ...options,
    headers,
    credentials: "include",
  });

  // If the retry is still unauthorized, authentication is no longer valid.
  if (response.status === 401) {
    window.location.href = "/login";
  }

  return response;
}