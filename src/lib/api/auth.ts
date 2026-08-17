const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export interface AuthUser {
  id: string;
  email: string;
  isEmailVerified: boolean;
  onboardingCompleted?: boolean;
}

export interface AuthResponse {
  message: string;
  user?: AuthUser;
}

interface ApiError {
  message?: string;
  errors?: unknown;
}

async function handleResponse<T>(response: Response): Promise<T> {
  const data: ApiError & T = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      typeof data.message === "string"
        ? data.message
        : "Something went wrong. Please try again.",
    );
  }

  return data as T;
}

export async function login(
  email: string,
  password: string,
): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      email,
      password,
    }),
  });

  return handleResponse<AuthResponse>(response);
}

export async function register(
  email: string,
  password: string,
): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      email,
      password,
    }),
  });

  return handleResponse<AuthResponse>(response);
}

/**
 * Refresh the authentication cookies.
 *
 * The refresh token is stored in an HttpOnly cookie,
 * so the frontend does not need to read or send it.
 */
export async function refreshAccessToken(): Promise<void> {
  const response = await fetch(`${API_URL}/api/auth/refresh`, {
    method: "POST",
    credentials: "include",
  });

  await handleResponse<{
    message: string;
  }>(response);
}

export async function logout(): Promise<void> {
  const response = await fetch(`${API_URL}/api/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  await handleResponse<{
    message: string;
  }>(response);
}

export type OAuthModule = "login" | "signup";

export function getGoogleAuthUrl(mode: OAuthModule) {
  return `${API_URL}/api/auth/google?mode=${mode}`;
}

export function getGitHubAuthUrl(mode: OAuthModule) {
  return `${API_URL}/api/auth/github?mode=${mode}`;
}

export interface ProgrammingLanguage {
  id: string;
  name: string;
}

export async function getProgrammingLanguages(): Promise<
  ProgrammingLanguage[]
> {
  const response = await fetch(`${API_URL}/api/onboarding/languages`, {
    method: "GET",
    credentials: "include",
  });

  const result = await handleResponse<{
    success: boolean;
    data: ProgrammingLanguage[];
  }>(response);

  return result.data;
}

export async function completeOnboarding(data: {
  displayName: string;
  username: string;
  experienceLevel: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  preferredLanguageId: string;
  avatarUrl?: string;
}) {
  const response = await fetch(`${API_URL}/api/onboarding`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return handleResponse<{
    success: boolean;
    message: string;
    data: unknown;
  }>(response);
}

export interface ProfileResponse {
  user: {
    id: string;
    email: string;
    isEmailVerified: boolean;
    onboardingCompleted: boolean;
    createdAt: string;
  };
  profile: {
    displayName: string;
    username: string;
    avatarUrl: string | null;
    experienceLevel: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
    leetcodeUsername: string | null;
    githubUsername: string | null;
  };
  preferences: {
    targetCompany: string[];
    targetRole: string | null;
    preferredLanguageId: string | null;
    preferredLanguage: {
      id: string;
      name: string;
    } | null;
    dailyGoalMinutes: number | null;
    weeklyGoalProblems: number | null;
  };
}

export async function getProfile(): Promise<ProfileResponse> {
  const response = await fetch(`${API_URL}/api/profile`, {
    method: "GET",
    credentials: "include",
  });

  return handleResponse<ProfileResponse>(response);
}