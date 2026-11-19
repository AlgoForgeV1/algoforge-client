import { authenticatedFetch } from "@/src/lib/api/authenticated-fetch";
import type { Language, RunResult } from "./types";

type ExecutionPayload = {
  questionId: string;
  language: Language;
  code: string;
  stdin?: string;
};

async function execute(endpoint: string, payload: ExecutionPayload): Promise<RunResult> {
  const response = await authenticatedFetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });
  const body = await response.json().catch(() => null) as
    | { success?: boolean; message?: string; data?: RunResult }
    | null;
  if (!response.ok || !body?.success || !body.data) {
    throw new Error(body?.message || "Unable to execute code. Please try again.");
  }
  return body.data;
}

export function runCode(payload: ExecutionPayload): Promise<RunResult> {
  return execute("/api/mockoa/questions/run", payload);
}

export function submitCode(payload: Omit<ExecutionPayload, "stdin">): Promise<RunResult> {
  return execute("/api/mockoa/questions/submit", payload);
}
