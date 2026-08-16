const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export type ExperienceLevel =
  | "BEGINNER"
  | "INTERMEDIATE"
  | "ADVANCED";

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
    experienceLevel: ExperienceLevel;
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

interface ProfileApiResponse {
  message: string;
  userProfile: ProfileResponse;
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

/**
 * Get the currently authenticated user's profile.
 */
export async function getProfile(): Promise<ProfileResponse> {
  const response = await fetch(`${API_URL}/api/profile`, {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });

  const result = await handleResponse<ProfileApiResponse>(response);

  return result.userProfile;
}

/**
 * Update profile information.
 */
export async function updateProfile(data: {
  displayName?: string;
  username?: string;
  avatarUrl?: string;
  experienceLevel?: ExperienceLevel;
  leetcodeUsername?: string;
  githubUsername?: string;
}): Promise<ProfileResponse> {
  const response = await fetch(`${API_URL}/api/profile/update`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const result = await handleResponse<{
    message: string;
    updatedProfile: ProfileResponse;
  }>(response);

  return result.updatedProfile;
}

/**
 * Update profile preferences.
 */
export async function updateProfilePreferences(data: {
  targetCompany?: string[];
  targetRole?: string;
  preferredLanguageId?: string;
  dailyGoalMinutes?: number;
  weeklyGoalProblems?: number;
}): Promise<ProfileResponse["preferences"]> {
  const response = await fetch(`${API_URL}/api/profile/update/preferences`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const result = await handleResponse<{
    message: string;
    updatedProfilePreferences: ProfileResponse["preferences"];
  }>(response);

  return result.updatedProfilePreferences;
}

export interface ProgrammingLanguage {
  id: string;
  name: string;
}

/**
 * Get available programming languages.
 */
export async function getProgrammingLanguages(): Promise<
  ProgrammingLanguage[]
> {
  const response = await fetch(`${API_URL}/api/onboarding/languages`, {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });

  const result = await handleResponse<{
    success: boolean;
    data: ProgrammingLanguage[];
  }>(response);

  return result.data;
}