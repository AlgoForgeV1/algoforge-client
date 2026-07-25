import {
  AnalysisItem,
  Recommendation,
  SolutionLine,
} from "./types";

export const solution: SolutionLine[] = [
  {
    id: 1,
    text: "public int[] twoSum(int[] nums, int target) {",
  },
  {
    id: 2,
    text: "Map<Integer, Integer> map = new HashMap<>();",
    highlight: true,
  },
  {
    id: 3,
    text: "",
  },
  {
    id: 4,
    text: "for (int i = 0; i < nums.length; i++) {",
  },
  {
    id: 5,
    text: "int complement = target - nums[i];",
  },
  {
    id: 6,
    text: "if (map.containsKey(complement)) {",
    highlight: true,
  },
  {
    id: 7,
    text: "return new int[]{map.get(complement), i};",
  },
  {
    id: 8,
    text: "}",
  },
  {
    id: 9,
    text: "map.put(nums[i], i);",
  },
  {
    id: 10,
    text: "}",
  },
  {
    id: 11,
    text: "return new int[]{};",
  },
  {
    id: 12,
    text: "}",
  },
];

export const analysis: AnalysisItem[] = [
  {
    id: 1,
    title: "Pattern",
    value: "HashMap",
    highlightLine: 2,
  },
  {
    id: 2,
    title: "Complexity",
    value: "O(n)",
    highlightLine: 4,
  },
  {
    id: 3,
    title: "Time Taken",
    value: "8m 42s",
  },
];

export const recommendations: Recommendation[] = [
  {
    id: 1,
    title: "3Sum",
    difficulty: "Medium",
    topic: "Two Pointers",
  },
  {
    id: 2,
    title: "Group Anagrams",
    difficulty: "Medium",
    topic: "HashMap",
  },
  {
    id: 3,
    title: "Valid Sudoku",
    difficulty: "Medium",
    topic: "Matrix",
  },
];