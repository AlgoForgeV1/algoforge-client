"use client";

import { create } from "zustand";

export type Language =
  | "java"
  | "cpp"
  | "python"
  | "javascript";

interface AssessmentStore {
  currentQuestion: number;

  language: Language;

  code: Record<number, string>;

  answers: Record<number, unknown>;

  visitedQuestions: number[];

  timeRemaining: number;

  setLanguage: (language: Language) => void;

  setCurrentQuestion: (question: number) => void;

  setCode: (
    question: number,
    code: string
  ) => void;

  saveAnswer: (
    question: number,
    answer: unknown
  ) => void;

  tick: () => void;
}

export const useAssessmentStore =
  create<AssessmentStore>((set) => ({
    currentQuestion: 1,

    language: "java",

    code: {},

    answers: {},

    visitedQuestions: [1],

    timeRemaining: 100 * 60,

    setLanguage: (language) =>
      set({
        language,
      }),

    setCurrentQuestion: (question) =>
      set((state) => ({
        currentQuestion: question,

        visitedQuestions:
          state.visitedQuestions.includes(question)
            ? state.visitedQuestions
            : [...state.visitedQuestions, question],
      })),

    setCode: (question, code) =>
      set((state) => ({
        code: {
          ...state.code,
          [question]: code,
        },
      })),

    saveAnswer: (question, answer) =>
      set((state) => ({
        answers: {
          ...state.answers,
          [question]: answer,
        },
      })),

    tick: () =>
      set((state) => ({
        timeRemaining:
          state.timeRemaining > 0
            ? state.timeRemaining - 1
            : 0,
      })),
  }));