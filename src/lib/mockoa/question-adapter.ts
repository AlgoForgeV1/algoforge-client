
import type {
  CodingQuestion,
  Difficulty,
  Example,
  Language,
  Question,
} from "@/src/lib/interview/types";

import type {
  AssessmentDetailQuestion,
  AssessmentDetails,
} from "@/src/lib/mockoa/api";

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function toDifficulty(value: unknown): Difficulty {
  switch (String(value ?? "").trim().toUpperCase()) {
    case "EASY":
      return "Easy";
    case "HARD":
      return "Hard";
    case "MEDIUM":
      return "Medium";
    default:
      return "Medium";
  }
}

function parseValue(value: unknown): unknown {
  if (typeof value !== "string") return value;

  const trimmed = value.trim();

  if (!trimmed) return value;

  try {
    return JSON.parse(trimmed);
  } catch {
    return value;
  }
}

function toText(value: unknown): string {
  if (typeof value === "string") return value;
  if (value == null) return "";

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  return "";
}

function toStringArray(value: unknown): string[] {
  const parsed = parseValue(value);

  if (Array.isArray(parsed)) {
    return parsed
      .map((item) => toText(item).trim())
      .filter(Boolean);
  }

  if (typeof parsed === "string" && parsed.trim()) {
    return parsed
      .split(/\r?\n/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

/* -------------------------------------------------------------------------- */
/* Examples and sample test cases                                             */
/* -------------------------------------------------------------------------- */

function toExamples(value: unknown): Example[] {
  const parsed = parseValue(value);

  const items = Array.isArray(parsed)
    ? parsed
    : parsed && typeof parsed === "object"
      ? [parsed]
      : typeof parsed === "string" && parsed.trim()
        ? [{ input: parsed, output: "" }]
        : [];

  return items.flatMap((item): Example[] => {
    if (!item || typeof item !== "object") {
      return [];
    }

    const record = item as Record<string, unknown>;

    const input =
      record.input ??
      record.stdin ??
      record.sampleInput ??
      record.exampleInput;

    const output =
      record.output ??
      record.stdout ??
      record.expectedOutput ??
      record.exampleOutput;

    if (input == null && output == null) {
      return [];
    }

    const explanation =
      record.explanation ??
      record.explain ??
      record.description;

    return [
      {
        input: toText(input),
        output: toText(output),
        ...(explanation != null && toText(explanation).trim()
          ? { explanation: toText(explanation) }
          : {}),
      },
    ];
  });
}

/* -------------------------------------------------------------------------- */
/* Statement                                                                  */
/* -------------------------------------------------------------------------- */

function getStatement(
  content: AssessmentDetailQuestion["content"],
): string {
  if (!content) return "";

  return toText(content.statement)
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim();
}

function toDescription(statement: string): string[] {
  if (!statement.trim()) return [];

  return statement
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

/* -------------------------------------------------------------------------- */
/* Starter templates                                                          */
/* -------------------------------------------------------------------------- */

function getStarterTemplates(
  value: unknown,
): Record<Language, string> {
  const parsed = parseValue(value);

  const templates: Record<string, unknown> =
    parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? (parsed as Record<string, unknown>)
      : {};

  return {
    java: toText(
      templates.java ??
      templates.Java,
    ),

    cpp: toText(
      templates.cpp ??
      templates["c++"] ??
      templates["C++"],
    ),

    python: toText(
      templates.python ??
      templates.py ??
      templates.Python,
    ),

    javascript: toText(
      templates.javascript ??
      templates.js ??
      templates.JavaScript ??
      templates.node,
    ),
  };
}

/* -------------------------------------------------------------------------- */
/* Coding question adapter                                                    */
/* -------------------------------------------------------------------------- */

function toCodingQuestion(
  question: AssessmentDetailQuestion,
): CodingQuestion {
  const content = question.content;

  if (!content) {
    throw new Error(
      `Question content is missing for question ${question.id}.`,
    );
  }

  const statement = getStatement(content);

  const examples = toExamples(content.examples);
  const sampleTestCases = toExamples(content.sampleTestCases);

  // Use sample test cases as examples if the imported question
  // does not have a separate examples array.
  const resolvedExamples =
    examples.length > 0 ? examples : sampleTestCases;

  const resolvedSampleCases =
    sampleTestCases.length > 0 ? sampleTestCases : examples;

  return {
    id: question.id,
    type: "coding",

    title: toText(content.title).trim() || "Untitled question",

    difficulty: toDifficulty(content.difficulty),

    marks: question.marks,

    description: toDescription(statement),

    inputFormat: toText(content.inputFormat).trim(),

    outputFormat: toText(content.outputFormat).trim(),

    examples: resolvedExamples,

    sampleTestCases: resolvedSampleCases,

    constraints: toStringArray(content.constraints),

    hints: [],

    starter: getStarterTemplates(content.codeTemplates),

    sampleInput:
      resolvedSampleCases[0]?.input ??
      resolvedExamples[0]?.input ??
      "",
  };
}

/* -------------------------------------------------------------------------- */
/* Public adapter                                                             */
/* -------------------------------------------------------------------------- */

export function adaptAssessmentQuestions(
  assessment: AssessmentDetails,
): Question[] {
  return assessment.questions
    .slice()
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .flatMap((question): Question[] => {
      try {
        return [toCodingQuestion(question)];
      } catch (error) {
        console.error(
          `Unable to adapt assessment question ${question.id}:`,
          error,
        );

        return [];
      }
    });
}
